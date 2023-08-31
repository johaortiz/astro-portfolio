const validate = (values) => {
    let errorsEs = {};
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.email) {
        errorsEs = "El correo es Requerido por favor ingrese su correo";
    } else if (!re.test(String(values.email).toLowerCase())) {
        errorsEs = "Correo invalido";
    } else if (!values.name) {
        errorsEs = "El nombre es Requerido por favor ingrese su nombre";
    } else if (!values.subject) {
        errorsEs = "El asunto es Requerido por favor ingrese un asunto";
    } else if (!values.message) {
        errorsEs = "El mensaje es Requerido por favor ingrese un mensaje";
    } else if (values.message.length < 9) {
        errorsEs = "El mensaje debe tener al menos 9 caracteres";
    }
    return errorsEs;
};

export default validate;
