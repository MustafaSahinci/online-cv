function fetchGithuBInformation(event) {
    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a Github user name</h2>`);
        return;
    }

    $("gh-userdata").html(
        `
        <div id="loader">
            <img src="assets/images/loader.gif" alt="loading..."/>
        </div>
        `)
}