const handleLogin = (e) => {
    e.preventDefault();

    $("#domoMessage").animate({ width: 'hide'}, 350);

    if($("#user").val() == '' || $("#pass").val() == ''){
        handleError("RAWR! Username or Password is empty");
        return false;
    }

    console.log($("input[name=_csrf]").val());

    sendAjax('POST', $("#loginForm").attr("action"), $("#loginForm").serialize(), redirect);

    return false;
}

const handleSignup = (e) => {
    e.preventDefault();

    $("#domoMessage").animate({ width: 'hide'}, 350);

    if($("#user").val() == '' || $("#pass").val() == '' || $("#pass2").val() == ''){
        handleError("RAWR! All fields are required");
        return false;
    }

    if($("#pass").val() !== $("#pass2").val()){
        handleError("RAWR! Passwords do not match");
        return false;
    }

    sendAjax('POST', $("#signupForm").attr("action"), $("#signupForm").serialize(), redirect);

    return false;
}

const LoginWindow = (props) => {
    return(
        <form id="loginForm" name="loginForm"
            onSubmit={handleLogin}
            action="/login"
            method="POST"
            className="mainForm">
            
            <label htmlFor="username">Username: </label>
            <input id="user" type="text" name="username" placeholder="username" />
            <label htmlFor="password">Password: </label>
            <input id="pass" type="password" name="pass" placeholder="password" />
            <input type="hidden" name="_csrf" value={props.csrf} />
            <input classname="formSubmit" type="submit" value="Sign In" />
        </form>
    );
}

const SignUpWindow = (props) => {
    return(
        <form id="signupForm" name="signupForm"
            onSubmit={handleSignup}
            action="/signup"
            method="POST"
            className="mainForm">
            
            <label htmlFor="username">Username: </label>
            <input id="user" type="text" name="username" placeholder="username" />
            <label htmlFor="pass">Password: </label>
            <input id="pass" type="password" name="pass" placeholder="password" />
            <label htmlFor="pass2">Password: </label>
            <input id="pass2" type="password" name="pass2" placeholder="retype password" />
            <input type="hidden" name="_csrf" value={props.csrf} />
            <input classname="formSubmit" type="submit" value="Sign Up" />
        </form>
    );
}