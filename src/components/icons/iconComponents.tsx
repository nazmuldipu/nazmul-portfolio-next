import React from "react";

export const JsonPreview = ({ document }) => {
  return (
    <div>
      <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
    </div>
  );
};
// const JsonPreview = ({document}: any) => {
//   return `${JSON.stringify(document.displayed, null, 2)}` // <--- this is the important part
// }

export const portfolioIcon = () => <span>👨‍💼</span>;
export const navbarIcon = () => <span>☰</span>;

export const mathInlineIconIcon = () => (
  <span>
    <span style={{ fontWeight: "bold" }}>∑</span>b
  </span>
);

export const mathIcon = () => <span style={{ fontWeight: "bold" }}>∑</span>;
export const dollarSignIcon = () => <span>💲</span>;
export const placardIcon = () => <span>🪧</span>;
export const eventIcon = () => <span>🎈</span>;
export const bootCampIcon = () => <span>🧠</span>;
export const bootCampModuleIcon = () => <span>💪</span>;
export const bootcampActivityIcon = () => <span>🏋️</span>;
export const studytipsIcon = () => <span>📜</span>;
export const multipleChoiceTestIcon = () => <span>✅</span>;
export const cameraIcon = () => <span>📷</span>;
export const questIcon = () => <span>🏃‍♂️</span>;
export const speechIcon = () => <span>💬</span>;
export const infosIcon = () => <span>ℹ️</span>;
export const hillIcon = () => <span>⛰️</span>;
export const leafIcon = () => <span>🍂</span>;
export const checkMarkIcon = () => <span>✔️</span>;
export const juniorDrillActivityIcon = () => <span>⚽</span>;
export const kiteIcon = () => <span>🎾</span>;
export const awsImageIcon = () => <span>🖼️</span>;
export const awsVideoIcon = () => <span>🎥</span>;
export const colorIcon = () => <span>🎨</span>;
export const clockIcon = () => <span>🕒</span>;
export const digitalTextIcon = () => <span>📟</span>;
export const supIcon = () => <span>a^b</span>;
export const encyclopediaIcon = () => <span>📖</span>;
export const redirectIcon = () => <span>➡️</span>;
export const i18nNamespaceIcon = () => <span>🦁</span>;
export const i18nIcon = () => <span>🐅</span>;
export const blogIcon = () => <span>📝</span>;
export const newsIcon = () => <span>📰</span>;
export const pressReleaseIcon = () => <span>🏢</span>;
export const mediabankIcon = () => <span>⬇️</span>;
export const shoppingBagIcon = () => <span>🛍️</span>;
export const peopleGroupIcon = () => <span>👥</span>;
export const noAvatarIcon = () => <span>👤</span>;
export const tutorOnDemandIcon = () => <span>👩‍🏫</span>;
export const juniorMentorIcon = () => <span>🧑‍💼</span>;
export const seniorMentorIcon = () => <span>👨‍💼</span>;
export const worldMap = () => <span>🗺️</span>;
export const flagNorweign = () => <span>🇳🇴</span>;
export const flagUkraine = () => <span>🇺🇦</span>;
export const campaignIcon = () => <span>🔊</span>;
export const ledgerIcon = () => <span>📒</span>;
export const backNibIcon = () => <span>✒️</span>;
export const mappingQuiz = () => <span>🗺️📘️</span>;
export const questionIcon = () => <span>❓</span>;
export const advancedQuestionIcon = () => <span>⁉️</span>;
export const featureProductCardIcon = () => <span>🪟</span>;
export const featureProductsIcon = () => <span>🖼</span>;
export const awsFileIcon = () => <span>📁</span>;
export const usefulWordsIcon = () => <span>📚</span>;
export const cartIcon = () => <span>🛒</span>;
export const dragonIcon = () => <span>🐲</span>;
export const officeWorkersIcon = () => <span>👨‍💼👩‍💼</span>;
export const graduationCapIcon = () => <span>🎓</span>;
export const categoryListIcon = () => <span>📑</span>;
export const staticPageIcon = () => <span>📃</span>;
export const exclamationMarkIcon = () => <span>❗</span>;
export const cardFileBoxIcon = () => <span>🗃️</span>;
export const maleTeacherIcon = () => <span>🧑‍🏫</span>;
export const blackSquareButtonIcon = () => <span>🔲</span>;
export const gapIcon = () => <span> </span>;
export const puzzleIcon = () => <span>🧩</span>;
