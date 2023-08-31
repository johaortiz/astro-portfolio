import axios from "axios";
import Swal from "sweetalert2";

export const sendEmail = async (email) => {
    try {
        axios.post(
            "https://back-nodemailer-to-port-production.up.railway.app/send",
            email
        );
        Swal.fire({
            icon: "success",
            title: "Correo Enviado",
            text: "Tu correo ha sido enviado exitosamente",
            timer: 2500,
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal!",
            timer: 2500,
        });
    }
};
