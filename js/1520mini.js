function getURLParameter(name)
{
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function authorizeUser()
{
    var username = getURLParameter("username");
    var userFullName = getURLParameter("fullname");
    var destURL = getURLParameter("destination");
    var projectURL = getURLParameter("projecturl");
    var keywordPhraseURL = getURLParameter("phrase");
    var keywordID = getURLParameter("kwid");
    
    var projectID = getURLParameter("pid");
    var clientURL = getURLParameter("client");
    var competitor1 = getURLParameter("c1");
    var competitor2 = getURLParameter("c2");
    var competitor3 = getURLParameter("c3");
    var competitor4 = getURLParameter("c4");
    var competitor5 = getURLParameter("c5");
    
    
    
    var qs = "";
    if(typeof projectURL !== "undefined" && projectURL !== "null" && projectURL !== null)
    {
        if(typeof keywordID !== "undefined" && keywordID !== "null" && keywordID !== null)
        {
            qs = "?purl="+projectURL+"&kwid="+keywordID;
        }
        else
        {
            qs = "?purl="+projectURL;
        }
        
    }
    if(typeof clientURL !== "undefined" && clientURL !== "null" && clientURL !== null)
    {
        if(typeof keywordID !== "undefined" && keywordID !== "null" && keywordID !== null)
        {
            qs = "?purl="+clientURL+"&kwid="+keywordID;
        }
        else
        {
            qs = "?purl="+clientURL;
        }
    }
    if(typeof projectID !== "undefined" && projectID !== "null" && projectID !== null)
    {
        if(typeof keywordID !== "undefined" && keywordID !== "null" && keywordID !== null)
        {
            qs = "?pid="+projectID+"&purl="+clientURL+"&c0="+clientURL+"&c1="+competitor1+"&c2="+competitor2+"&c3="+competitor3+"&c4="+competitor4+"&c5="+competitor5+"&phrase="+keywordPhraseURL+"&kwid="+keywordID;
        }
        else
        {
            qs = "?pid="+projectID+"&purl="+clientURL+"&c0="+clientURL+"&c1="+competitor1+"&c2="+competitor2+"&c3="+competitor3+"&c4="+competitor4+"&c5="+competitor5+"&phrase="+keywordPhraseURL;
        }
    }
    
    if(destURL == "report")
    {
        qs = "?pid="+projectID+"&purl="+projectURL+"&kwid="+keywordID;;
    }
    
    document.cookie = "username="+username;
    document.cookie = "userFullName="+userFullName;
    window.location = destURL+".html"+qs;
}