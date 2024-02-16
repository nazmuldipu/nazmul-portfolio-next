import { client } from "./client";

export async function getProfile() {
  const posts = await client.fetch(
    '*[_type == "portfolio"][0]{about,experience,education,lastEducation,navbar,location,headline,image,title,skills,name}'
  );
  return posts;
}

export async function getHomePageData() {
  const data = await client.fetch(
    '*[_type == "portfolio"][0]{about,name,image,navbar}'
  );
  return data;
}

export async function getSkillsData() {
  const data = await client.fetch(
    '*[_type == "portfolio"][0]{name, skills,navbar}'
  );
  return data;
}

export async function getExperiencesData() {
  const data = await client.fetch(
    '*[_type == "portfolio"][0]{experience,navbar,name}'
  );
  return data;
}
