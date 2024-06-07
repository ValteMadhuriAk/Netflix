export const checkValidData = (email,password)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    // const isfullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);
    
    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password  is not Valid";
    // if(!isfullNameValid) return "FullName is not valid"

    return null;
}
