<script>
let staff_number, first_name, surname, employee_code, qualification_code, hours_worked, fixed_salary, gross_salary, deductions, health_surcharge, net_salary;

//Prompts
staff_number = prompt("Please enter employee number:");
first_name = prompt("Please enter first name");
surname = prompt("Please enter employee last name:");
employee_code = prompt("Please enter employee code:");
hours_worked = prompt("Please enter hours worked:");


//Lecturer conditions 
if(employee_code == "L", "l")
{
	qualification_code = prompt("Qualification code:");
	
    if(qualification_code == "M" || qualification_code == "m")
    {
        if(gross_salary > 499.99)
        {
            health_surcharge == 33
        }
        
        else
        {
        	health_surcharge == 19.20
        }
        
        gross_salary = (575*hours_worked) + 2500;
        income_tax = (25/100)*gross_salary;
        deductions = income_tax + health_surcharge;
        net_salary = gross_salary - deductions;
        
        alert(`Employee Pay Slip \nEmployee Number: ${staff_number}\n \nEmployee Name: ${first_name} ${surname}\n \nEmployee Type: Lecturer\n \nEmployee Gross Salary: ${gross_salary}\n \nEmployee Deductions :${deductions}\n \nEmployee Net Salary :${net_salary}\n`);
    }
    
    else if(qualification_code == "B" || qualification_code == "b")
    {
    	fixed_salary = parseFloat(prompt("Please enter fixed salary"));
        
    	if(hours_worked == 160)
        {
            gross_salary = (325*hours_worked) + 1250;
            net_salary = fixed_salary - deductions;
        }
        
        else
        {
        	gross_salary = fixed_salary/160
           	income_tax = 25/100 * gross_salary;
        	
            if(gross_salary > 499.99)
       		{
            	health_surcharge == 33
        	}
        
        	else
        	{
        		health_surcharge == 19.20
        	}
            
            deductions = income_tax + health_surcharge;
        	net_salary = gross_salary - deductions;
        }
        
        alert(`Employee Pay Slip \nEmployee Number: ${staff_number}\n \nEmployee Name: ${first_name} ${surname}\n \nEmployee Type: Regular Worker\n \nEmployee Gross Salary: ${gross_salary}\n \nEmployee Deductions :${deductions}\n \nEmployee Net Salary :${net_salary}\n`);
    }
    
    else
    {
    	alert("This code is invalid. Please indicate M for Masters degree or B for Bachelors degree.");
    }
}

//Regular staff conditions
else if(employee_code == "R" || employee_code == "r")
{
	
}

//Error
else
{
	alert("This code is invalid. Please indicate L for lecturer or R for regular staff.");
}

</script>