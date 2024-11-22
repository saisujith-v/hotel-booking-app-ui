const config={
    cognito:{
        identityPoolId:"us-east-1_J65JQZqiQ", // put your AWS Cognito Identity Pool ID here
        cognitoDomain:"hotel-cmpe-272.auth.us-east-1.amazoncognito.com", // put your AWS Cognito domain here i.e., hote.mydomain.com
        appId:"3697eg5rdqbt7kc8d1fiq1g7k7" // Create an Applicaiton in AWS Cognito (under User Pool) and put its ID here.
    }
}

var cognitoApp={
    auth:{},
    Init: function()
    {

        var authData = {
            ClientId : config.cognito.appId,
            AppWebDomain : config.cognito.cognitoDomain,
            TokenScopesArray : ['email', 'openid'],
            RedirectUriSignIn : 'http://localhost:8080/hotel/index.html',
            RedirectUriSignOut : 'http://localhost:8080/hotel',
            UserPoolId : config.cognito.identityPoolId, 
            AdvancedSecurityDataCollectionFlag : false,
                Storage: null
        };

        cognitoApp.auth = new AmazonCognitoIdentity.CognitoAuth(authData);
        cognitoApp.auth.userhandler = {
            onSuccess: function(result) {
              
            },
            onFailure: function(err) {
            }
        };
    }
}