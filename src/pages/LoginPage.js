function LoginPage() {

    const onGoogleSocialLogin = () => {
        window.location.href = `http://localhost:8080/oauth2/authorization/google`;
    }

    return(
        <div>
            <div>
                <button
                    onClick={onGoogleSocialLogin}>
                    구글 소셜 로그인
                </button>
            </div>
        </div>
    );
}

export default LoginPage;