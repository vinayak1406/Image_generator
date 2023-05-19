const {Configuration,OpenAIApi} = require('openai')

const config = new Configuration({
    apiKey:process.env.OpenAI_API_KEY,
})
const openai = new OpenAIApi(config)
const generateImages = async (req,res) =>{
    const{prompt,size} = req.body
    const imageSize = size === 'small'? '256x256': size==='medium' ? '512x512': '1024x1024'
   try {
    const response = await openai.createImage({
        prompt,
        n:1,
        size: imageSize
    })
    const imageURL = response.data.data[0].url
    res.status(200).json({ success: true, data: imageURL })
   } 
   catch (error) {
    if(error.response){
        console.log(error.response.status)
        console.log(error.response.data)
    }else{console.log(error.message) }
    res.status(400).json({ success: false, error:'Image generation failed' })}
}

module.exports = {generateImages}