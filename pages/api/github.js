const {Octokit} = require("@octokit/rest")

export default async (req, res) => {
    
    const octokit = new Octokit({
            auth: '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' //GITHUB_AUTH_TOKEN .env
        })
    
    const users = await octokit.request('GET /users?10', {})

    console.log(res)
    return res.status(200).json({users})
}