const {Octokit} = require("@octokit/rest")

export default async (req, res) => {
    
    const octokit = new Octokit({
            auth: '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' //GITHUB_AUTH_TOKEN .env
        })
    
    const users = await octokit.request('GET /users?per_page=8', {})

    console.log(res)
    return res.status(200).json({users}) 
}