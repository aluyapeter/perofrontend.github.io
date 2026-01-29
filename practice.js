const projects = [
  { id: 1, title: "Portfolio", tech: "HTML/SCSS" },
  { id: 2, title: "Task Manager", tech: "React" },
  { id: 3, title: "Server API", tech: "Node.js" }
]

const generateProjectList = (projectArray) => {
    return projectArray.map(({ title, tech }) => {
        return `Project: ${title} (Built with ${tech})`
    })
}

console.log(generateProjectList(projects))

// const toggleBtn = config.toggleBtn;

// const {toggleBtn} = toggleBtn