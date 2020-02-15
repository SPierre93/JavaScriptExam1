<script>
let staff_number, first_name, surname, employee_code, qualification_code, hours_worked, fixed_salary, gross_salary, deductions, tax_allowance, health_surcharge, net_salary;

//Non-conditional Prompts
staff_number = prompt("Please enter employee number:");
first_name = prompt("Please enter first name:");
surname = prompt("Please enter employee last name:");
employee_code = prompt("Please enter employee code:");


//Error
if(employee_code != "L" && employee_code != "l" && employee_code != "R" && employee_code != "r")
{
	alert("This employee code is invalid. Please indicate L for lecturer or R for regular staff.");
}


//Lecturer conditions 
else if(employee_code == "L" || employee_code == "l")
{
    hours_worked = prompt("Please enter hours worked:");
    qualification_code = prompt("Qualification code:");
	
    if(qualification_code == "M" || qualification_code == "m")
    {
        gross_salary = (575*hours_worked) + 2500;
    }

    else if(qualification_code == "B" || qualification_code == "b")
    {
    	gross_salary = (325*hours_worked) + 1250;
    }	
    
    else
    {
    	alert("This code is invalid. Please indicate M for Masters degree or B for Bachelors degree.");
    }
    
    tax_allowance = 25/100 *(gross_salary - 5000);
    
    if(gross_salary > 499.99)
    {
    	deductions = tax_allowance + 33;
    }
        
    else
    {
    	deductions = tax_allowance + 19.20;
    }
    
    net_salary = gross_salary - deductions;  
    
    alert(`Employee Pay Slip \nEmployee Number: ${staff_number}\n \nEmployee Name: ${first_name} ${surname}\n \nEmployee Type: Lecturer\n \nEmployee Gross Salary: $${gross_salary}\n \nEmployee Deductions :$${deductions}\n \nEmployee Net Salary :$${net_salary}\n`);
}

//Regular staff conditions
else if(employee_code == "R" || employee_code == "r")
{
	hours_worked = prompt("Please enter hours worked:");
    fixed_salary = parseFloat(prompt("Please enter fixed salary:"));
     
    if(hours_worked == 160)
    {
        gross_salary = fixed_salary;
    }
    
    else if(hours_worked > 160)
    {
    	gross_salary = ;
    }
    
    else
    {
		gross_salary = (fixed_salary/160)*hours_worked; 
    }
    
    tax_allowance = 25/100 *(gross_salary - 5000)
    
    if(gross_salary > 499.99)
    {
    	deductions = tax_allowance + 33;
    }
        
    else
    {
    	deductions = tax_allowance + 19.20;
    }
            
    net_salary = gross_salary - deductions;
    alert(`Employee Pay Slip \nEmployee Number: ${staff_number}\n \nEmployee Name: ${first_name} ${surname}\n \nEmployee Type: Regular Worker\n \nEmployee Gross Salary: $${gross_salary}\n \nEmployee Deductions :$${deductions}\n \nEmployee Net Salary :$${net_salary}\n`);
}
</script>