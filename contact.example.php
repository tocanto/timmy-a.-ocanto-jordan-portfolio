<?php
// ... (Tus cabeceras headers igual que antes) ...
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$destinatario = "tu_email@ejemplo.com"; 
$asunto_email = "Nuevo Uplink desde el Portafolio";

$json = file_get_contents("php://input");
$data = json_decode($json);

// --- INICIO BLOQUE HONEYPOT ---
// Si el campo 'mobile' (la trampa) NO está vacío, es un bot.
if (!empty($data->mobile)) {
    // Fingimos éxito para engañar al bot
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Enviado"]);
    exit(); // Terminamos el script aquí. No se envía nada.
}
// --- FIN BLOQUE HONEYPOT ---

// Validación normal (ahora el bot ya fue filtrado)
if (
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
) {
    // ... (El resto de tu código de envío de correo sigue IGUAL) ...
    
    $nombre = htmlspecialchars(strip_tags($data->name));
    $email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
    $mensaje = htmlspecialchars(strip_tags($data->message));

    $cuerpo = "
    <html>
    <body style='background-color: #000; color: #fff; font-family: monospace; padding: 20px;'>
        <h2 style='color: #00ff41;'>TRANSMISSION RECEIVED</h2>
        <p><strong>Identity:</strong> $nombre</p>
        <p><strong>Comms Channel:</strong> $email</p>
        <hr style='border-color: #333;'>
        <p><strong>Message Data:</strong></p>
        <pre style='background-color: #111; padding: 15px; border: 1px solid #333; color: #ccc;'>$mensaje</pre>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Portfolio Uplink <noreply@tocanto.dev>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    if (mail($destinatario, $asunto_email, $cuerpo, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Email enviado"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Fallo en mail()"]);
    }

} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Datos incompletos"]);
}
?>