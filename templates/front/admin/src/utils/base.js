const base = {
    get() {
        return {
            url : "http://localhost:8080/djangoh5vhw6z3/",
            name: "djangoh5vhw6z3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python Web的社区爱心养老管理系统设计与实现"
        } 
    }
}
export default base
