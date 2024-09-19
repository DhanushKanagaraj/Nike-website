import userData from "../Model/login.model.js";

export const users = async(req,res)=>{
    const name = 'Dhanush';
    const email = 'dhanush@124';
    try {
        const user_login_data = new userData({
            name,
            email
        })
        user_login_data.save();
       res.status(200).send('data inserted successfully');
    } catch (error) {
        console.log('data is not inserted successfully');
    }
}