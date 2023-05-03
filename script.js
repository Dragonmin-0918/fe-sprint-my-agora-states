let i = 0;
let count = 0;

let submitBox = document.querySelector("#submitbox");
let str = {};

submitBox.onclick = function () {
  let masterName = document.querySelector(".inputbox_name");
  let masterTitle = document.querySelector(".inputbox_title");
  let masterQuestion = document.querySelector(".inputbox_question");

  str.author = masterName.value;
  str.title = masterTitle.value;
  str.bodyHTML = masterQuestion.value;
  agoraStatesDiscussions.unshift(str);
  str = {};
  const tweets = document.querySelectorAll(".discussion__container");
  tweets.forEach(function (tweet) {
    tweet.remove();
  });
  const ul = document.querySelector("ul.discussions__container");
  render(ul);
};

const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const avatarImg = document.createElement("img");
  avatarImg.className = "discussion__avatar--image";
  avatarImg.src = agoraStatesDiscussions[i].avatarUrl;
  avatarImg.width = "64";
  avatarImg.height = "64";
  avatarWrapper.append(avatarImg);
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionTitle = document.createElement("h5");
  discussionTitle.className = "discussion__title";
  const discussionTitleAtag = document.createElement("a");
  discussionTitleAtag.href = agoraStatesDiscussions[i].url;
  discussionTitle.append(discussionTitleAtag);
  discussionTitleAtag.textContent = agoraStatesDiscussions[i].title;
  const discussionInfo = document.createElement("div");
  discussionInfo.textContent = `${
    agoraStatesDiscussions[i].author
  } / ${new Date(agoraStatesDiscussions[i].createdAt).toLocaleTimeString()}`;
  discussionContent.append(discussionTitle, discussionInfo);
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";
  const checkBox = document.createElement("input");
  checkBox.className = "check";
  checkBox.type = "checkbox";
  discussionAnswered.append(checkBox);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
