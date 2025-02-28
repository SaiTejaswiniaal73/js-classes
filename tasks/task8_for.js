let student=
[
    {id: 1, s_name:"Pavan",city:"hyd"},
    {id: 2, s_name:"Arjun",city:"sec"},
    {id:3 ,s_name:"Meena",city:"viz"},
    {id: 4,s_name:"Rahul",city:"bengauru"},
    {id: 5,s_name:"Sita",city:"chennai"},
    {id: 6,s_name:"Vijay",city:"mumbai"},

]
for (i of student)
{
    console.log(i.s_name,"from",i.city)
}
for (i in student)
{
    console.log(student[i].s_name,"from",student[i].city)
}
