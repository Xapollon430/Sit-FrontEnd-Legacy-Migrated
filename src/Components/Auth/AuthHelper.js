import validator from "validator";

export const SignUpFormChecker = (formData, setError) => {
    let errorData = {};
    for (let data of formData) {
        if (formData[data] === "") {
            errorData[data] = `${data.toString()} can't be empty!`;
        } else if (data == "email") {
            errorData[data] = validator.isEmail(formData[data])
                ? null
                : `Please enter a valid email!`;
        } else if (data == "password") {
            errorData[data] =
                formData[data] < 6 ? `Password should be longer than 6!` : null;
        }
    }
    return errorData;
};
