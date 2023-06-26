import express from 'express'
import cors from 'cors'
import path from 'path'
const __dirname=path.resolve();

const app = express()
app.use(cors())

app.get('/marksheet/:rollno', (req, res) => {
  

    let studentData={
        '001':{
            name:'Imtiaz  Ali',
            rollno:'001',
            gpa:'3.12',
            status:'pass'
        },
        '002':{
            name:'Haziq Hussain',
            rollno:'002',
            gpa:'1.4',
            status:'fail'
        },
        '003':{
            name:'Irfan haider',
            rollno:'003',
            gpa:'3.65',
            status:'pass'
        },
        '004':{
            name:'Huzaifa',
            rollno:'004',
            gpa:'2.9',
            status:'pass'
        },
        '005':{
            name:'Adil Nazeer',
            rollno:'005',
            gpa:'3.54',
            status:'pass'
        }
    }

    var geturldata=req.params.rollno
    var getuserdata=studentData[geturldata]
    if(getuserdata){
        res.send(getuserdata)
    }
    else{
        res.send('Error')
    }
})



app.use(express.static(path.join(__dirname,'public')))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})