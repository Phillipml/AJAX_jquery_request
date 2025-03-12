$(document).ready(function () {
  const gitUser = "https://api.github.com/users/Phillipml";
  fetch(gitUser)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    })
    .then(function (json) {
      console.log(json);
      const profileAvatar = json.avatar_url;
      const profileName = json.name;
      const userName = json.login;
      const repo = json.public_repos;
      const followers = json.followers;
      const following = json.following;
      const profileLink = json.html_url;

      $("#profileAvatar").attr("src", `${profileAvatar}`);
      $("#profileName").text(profileName);
      $("#userName").text(userName);
      $("#repo").text(repo);
      $("#followers").text(followers);
      $("#following").text(following);
      $("#profileLink").attr("href", profileLink);
    })
    .catch(function (err) {
      alert(err.message);
      $("#profileName").text("Usuário não encontrado");
      $("#profileAvatar").attr(
        "src",
        "https://www.freeiconspng.com/thumbs/error-icon/error-icon-32.png"
      );
    });
});
