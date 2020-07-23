export default (bloggers) => {
  const editedBloggers = [];
  for (let blogger of bloggers) {
    if (typeof blogger.interests === "string") {
      editedBloggers.push({ name:blogger.name,email:blogger.email, interests: blogger.interests });
    } else {
      const keys = Object.keys(blogger.interests);
      const filtered = keys.filter((key) => blogger.interests[key]);
      blogger = { name:blogger.name,email:blogger.email, interests: filtered.join(",") };
      editedBloggers.push(blogger);
    }
  }
  return editedBloggers;
};
