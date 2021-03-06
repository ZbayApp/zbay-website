var linkButton = document.getElementById('zb-autodetect-platform');
var firstOtherLink = document.getElementById('zb-first-other-target-link');
var secondOtherLink = document.getElementById('zb-second-other-target-link');
var linkButtonBottom = document.getElementById('zb-autodetect-platform-bottom');
var firstOtherLinkBottom = document.getElementById('zb-first-other-target-link-bottom');
var secondOtherLinkBottom = document.getElementById('zb-second-other-target-link-bottom');

const setAttributes = (version) => {
  if (version === 'mac') {
    linkButton.classList.add('zb-hero-button-mac');
  }
  const versions = ['windows', 'mac', 'linux']
  const bigButtonText = {
    windows: 'Download for Windows',
    linux: 'Download for Linux',
    mac: 'Download for Mac'
  }
  const linkText = {
    windows: 'Windows',
    linux: 'Linux',
    mac: 'Mac'
  }
  var links = {
    windows: 'https://s3.amazonaws.com/release.zbay.lite/Zbay+Setup+3.2.21-zbay-lite.exe',
    linux: 'https://s3.amazonaws.com/release.zbay.lite/Zbay-3.2.21-zbay-lite.AppImage',
    mac: 'https://s3.amazonaws.com/release.zbay.lite/Zbay-3.2.21-zbay-lite.dmg'
  };
  var primaryButtonText = bigButtonText[version];
  var indexToRemove = versions.indexOf(version);
  versions.splice(indexToRemove, 1);
  var firstOtherLinkDesc = linkText[versions[0]];
  var secondOtherLinkDesc = linkText[versions[1]];
  var primaryButtonLink = links[version];
  var firstOtherLinkText = links[versions[0]];
  var secondOtherLinkText = links[versions[1]];
  linkButton.innerText = primaryButtonText;
  firstOtherLink.innerText = firstOtherLinkDesc;
  secondOtherLink.innerText = secondOtherLinkDesc;
  linkButton.setAttribute('href', primaryButtonLink);
  firstOtherLink.setAttribute('href', firstOtherLinkText);
  secondOtherLink.setAttribute('href', secondOtherLinkText);
  /* for bottom of page */
  linkButtonBottom.innerText = primaryButtonText;
  firstOtherLinkBottom.innerText = firstOtherLinkDesc;
  secondOtherLinkBottom.innerText = secondOtherLinkDesc;
  linkButtonBottom.setAttribute('href', primaryButtonLink);
  firstOtherLinkBottom.setAttribute('href', firstOtherLinkText);
  secondOtherLinkBottom.setAttribute('href', secondOtherLinkText);
}

if (navigator.appVersion.indexOf('Win') !== -1) {
  setAttributes('windows')
} else if (navigator.appVersion.indexOf('Mac') !== -1) {
  setAttributes('mac')
} else if (navigator.appVersion.indexOf('Linux') !== -1) {
  setAttributes('linux')
} else {
  setAttributes('mac')
}
