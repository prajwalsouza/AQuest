import random

var = {}

commonTemplate1 = '''

\\documentclass[10pt, a4paper]{article}

\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{lmodern}
\\usepackage{tgheros}
\\usepackage{helvet}
\\usepackage{tgadventor}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{tikz}

\\usepackage{enumitem}

\\usepackage{xcolor}
\\definecolor{answercolor}{RGB}{123,0,255}
\\definecolor{problemHeadcolor}{RGB}{0,189,255}
\\definecolor{problemLevelColor}{RGB}{255,102,0}
\\definecolor{headingSubTextColor}{RGB}{180,180,180}

\\pagestyle{empty}

\\begin{document}


'''

def processBasic():
	returnTemplate = '''


\\section*{
\\fontfamily{qag}\\selectfont
Linear Inequalities 
\\fontfamily{cmss}\\selectfont
\\textcolor{headingSubTextColor}{ \\small A small set of problems}
\\begin{flushright}\\small ''' + var['name'] + ''', This one's for you. :)
\\end{flushright}
}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemLevelColor}{Level 1}
}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 1}
}

\\fontfamily{cmss}\\selectfont
Solve $5x < ''' + var['p1a1'] + '''$ when $x$ is a natural number.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 2}
}

\\fontfamily{cmss}\\selectfont
Solve $''' + var['p2a1'] + '''x + 5 > ''' + var['p2a2'] + '''$ when $x$ is a real number.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 3}
}

\\fontfamily{cmss}\\selectfont
Solve $\\frac{''' + var['p3a1'] + '''(x-3)}{4} \\geq \\frac{5(3-x)}{7}$.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 4}
}

\\fontfamily{cmss}\\selectfont
Solve $\\frac{''' + var['p4a1'] + '''x-5}{3} - \\frac{7x-3}{5} \\leq \\frac{3x}{4}$.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 5}
}

\\fontfamily{cmss}\\selectfont
Mr. A obtained ''' + var['p5a1'] + ''' and 18 in first two tests. Find the minimum mark he should get in the third test to have an average of ''' + var['p5a2'] + '''.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 6}
}

\\fontfamily{cmss}\\selectfont
The longest side of a triangle is 4 times the shortest side and the third side is ''' + var['p6a1'] + ''' cm shorter than the longest side. If the perimeter of the triangle is atleast ''' + var['p6a2'] + ''' cm, find the minimum length of the shortest side. 

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 7}
}

\\fontfamily{cmss}\\selectfont
Solve the inequalities $x - 2y \\leq ''' + var['p7a1'] + '''$, $''' + var['p7a2'] + '''x + 4y \\geq 12$ and $x \\geq 0,  y \\geq 1$  
graphically. 

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemLevelColor}{Level 2}
}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 8}
}

\\fontfamily{cmss}\\selectfont
Attendence of a student was 50\\% at the beginning of a semester. The attendence then becomes 90\\% at the end of that semester. Was there a point in time during that semester, that the attendence was 75\\%?

\\newpage

	'''

	return returnTemplate


commonTemplate2 = '''
\\end{document}

'''

studentnames = ['Abhinava Krishna','Ajith Narayan K','Aaron Dane Pinto',' Aysha Simran',' Chinmay Annigeri Srinivasaprasanna','Clive Favian Aranha','Devagnik.H.S','Drishya Bhandary',' Eesh N Chouta',' Fahima Mohammed Abdul Majeed Padinhar ','Goutam P Nayak','Gurupreeth P.A','Haleema Nafisa Valavoor','Jehan Deon Dsouza','Joseph Paul Pooppally','Kaneeksha Kiran','Likhith D Kunder',' Lloyd Raju John','Mahzarin Misri','Mesha Shetty B M','N Rohan Bhat','Pratam D','Preethika Viya Dsouza','Samarth  S Patil','Shreesha.K',' Siddharth Kamath K ','Simaz','Subhiksha Rai','Sudhamshu','Suhan S Shetty','T Pranav Pai','Teesha Vijayraj','Varun Tejpal Puthran']
shortstudentnames = ['Abhinava','Ajith ','Aaron',' Aysha',' Chinmay','Clive','Devagnik','Drishya',' Eesh',' Fahima','Goutam','Gurupreeth','Haleema','Jehan','Joseph','Kaneeksha','Likhith',' Lloyd','Mahzarin','Mesha','Rohan','Pratam','Preethika','Samarth','Shreesha',' Siddharth ','Simaz','Subhiksha','Sudhamshu','Suhan','Pranav','Teesha','Varun']

Avalues = [1, 2, 3, 4, 5]

def processTemplate(copies):
	global var
	finaltemplate = commonTemplate1
	for copynum in range(copies):
		var['name'] = shortstudentnames[copynum]
		var['p1a1'] = random.randint(20, 30)
		var['p2a1'] = random.randint(3, 6)
		var['p2a2'] = random.randint(10, 15)
		var['p3a1'] = random.randint(2, 10)
		var['p4a1'] = random.randint(2, 6)
		var['p5a1'] = random.randint(10, 20)
		var['p5a2'] = random.randint(10, 20)
		var['p6a1'] = random.randint(2, 7)
		var['p6a2'] = random.randint(70, 99)
		var['p7a1'] = random.randint(1, 3)
		var['p7a2'] = random.randint(2, 5)

		for m in var:
			var[m] = str(var[m])

		basicTemplate = processBasic()
		printTemplate = basicTemplate
		finaltemplate = finaltemplate + printTemplate
	finaltemplate = finaltemplate + commonTemplate2
	return finaltemplate

result = processTemplate(len(studentnames))

print(result)