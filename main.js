const userSocialMedia = {
  github: '883210',
  youtube: 'b channel/UC63S58vWTVXO_t5D8y4wx8Q',
  facebook: 'JhonatanPrestes',
  instagram: 'j.prstes',
  twitter: 'maykbrito'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}

changeSocialMedia()

function getGitHubInfosProfiles() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubInfosProfiles()
