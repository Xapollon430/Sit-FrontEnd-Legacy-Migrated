import validator from "validator";

export const SignUpFormChecker = (formData, setError) => {
    let errorData = {
        email: null,
        username: null,
        password: null,
    };
    for (let data in errorData) {
        if (formData[data] == "") {
            errorData[data] = `${
                data.charAt(0).toUpperCase() + data.slice(1)
            } can't be empty!`;
        } else if (data == "email") {
            errorData[data] = validator.isEmail(formData[data])
                ? null
                : `Please enter a valid email!`;
        } else if (data == "password") {
            errorData[data] =
                formData[data].length < 6
                    ? `Password should be longer than 6 !`
                    : null;
        }
    }
    console.log(errorData);
    return errorData;
};
