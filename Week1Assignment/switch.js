function gradeSystem(mark)
{
    if(typeof(mark) == "number" && mark >=0 && mark <=100)
    {
    switch(true)
    {
        case mark >= 90:
        console.log("Achieved 'A' grade " +mark)
        break

        case mark >= 80:
        console.log("Achieved 'B' grade " +mark)
        break

        case mark >= 70:
        console.log("Achieved 'C' grade " +mark)
        break

        case mark >= 60:
        console.log("Achieved 'D' grade " +mark)
        break

        default:
        console.log("Acheived 'E' grade " +mark)
    }
    }
    else{
        console.log("Enter valid number alone")
    }
}

gradeSystem(100)