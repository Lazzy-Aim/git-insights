const {Octokit} = require("@octokit/rest")

export default async (req, res) => {
    
    const octokit = new Octokit({
            auth: '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' //GITHUB_AUTH_TOKEN .env
        })
    
    const users = await octokit.request('GET /users?per_page=8', {})
    
    const followers = await octokit.request('/users/user/followers?per_page=100')
    const followerCount = followers.data.length

    console.log(res)
    return res.status(200).json({followerCount, users})
}