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

\\usepackage{enumitem}

\\usepackage{xcolor}
\\definecolor{answercolor}{RGB}{0,189,255}
\\definecolor{problemHeadcolor}{RGB}{123,0,255}
\\definecolor{headingSubTextColor}{RGB}{180,180,180}

\\pagestyle{empty}

\\begin{document}

'''

def processBasic():
	returnTemplate = '''

\\section*{
\\fontfamily{qag}\\selectfont
Kinematics 9th 
\\fontfamily{cmss}\\selectfont
\\textcolor{headingSubTextColor}{Test 2}
}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{Problem 1}
}

\\fontfamily{cmss}\\selectfont
The object’s position is given by along the $x$-axis is given by $x(t)= ''' + var['a1'] + '''-3t+t^2$, ($x$ is in meters and $t$ in seconds)

\\begin{enumerate}[label=\\alph*)]
  \\item What is the position of the object at $t = 0$ seconds?
  \\item What is the position of the object at $t = 2$ seconds?
  \\item What is the displacement of the object between $t = 1$ and $t = 3$ seconds?
\\end{enumerate}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer}
}

\\begin{enumerate}[label=\\alph*)]
  \\item ''' + var['a1'] + ''' m
  \\item ''' + var['a2'] + ''' m
  \\item $x(1)=2-3+1=0$ \\newline
  $x(3)=2-9+9=2$ \\newline
  Displacement: $2 - 0 = 2$ m
\\end{enumerate}


\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{Problem 2}
}

\\fontfamily{cmss}\\selectfont
The object moves in such a way, that object’s position at time $t$ on the $y$ axis is given by $y(t)=2t-5t^2$, and the position along $x$ axis is given by $x(t)=3t$ ($x$ in meters, $y$ in meters, $t$ in seconds) 

In simple terms, position vector is given as $R(t)=\\begin{pmatrix}x(t)\\\\y(t)\\end{pmatrix}=\\begin{pmatrix}3t\\\\2t-5t^2\\end{pmatrix}$

\\begin{enumerate}[label=\\alph*)]
  \\item What is the position of the object at $t = 2$ seconds?
  \\item What is the displacement of the object between $t = 1$ and $t = 2$ seconds?
  \\item What is the average velocity of object between $t = 0$ and $t = 2$ seconds?
\\end{enumerate}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer}
}

\\begin{enumerate}[label=\\alph*)]
  \\item $R(2)=\\begin{pmatrix}6\\\\-16\\end{pmatrix}$
  \\item $R(1)=\\begin{pmatrix}3\\\\-3\\end{pmatrix}$ \\newline $R(2)=\\begin{pmatrix}6\\\\-16\\end{pmatrix}$ \\newline
  Displacement = $R(2) - R(1)=\\begin{pmatrix}6\\\\-16\\end{pmatrix} - \\begin{pmatrix}3\\\\-3\\end{pmatrix}=\\begin{pmatrix}3\\\\-13\\end{pmatrix}$ 
  \\item Average Velocity = $\\frac{Displacement}{Time}$ \\newline
  Displacement = $\\begin{pmatrix}6\\\\-16\\end{pmatrix}$m \\newline
  Time = $2$s \\newline
  Average Velocity = $\\frac{Displacement}{Time}=\\frac{1}{2}\\begin{pmatrix}6\\\\-16\\end{pmatrix}=\\begin{pmatrix}3\\\\-8\\end{pmatrix}$
  
\\end{enumerate}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{Problem 3}
}

\\fontfamily{cmss}\\selectfont
Object $A$ moves in such a way, that object’s position at time $t$ on the $y$ axis is given by $y(t)=2t$, and the position along $x$ axis is given by $x(t)=t$ ($x$ in meters, $y$ in meters, $t$ in seconds) 
In simple terms, position vector of object $A$ is given as $R_a(t)=\\begin{pmatrix}x(t)\\\\y(t)\\end{pmatrix}=\\begin{pmatrix}t\\\\2t\\end{pmatrix}$.Position vector of object $B$ is given as $R_b(t)=\\begin{pmatrix}x(t)\\\\y(t)\\end{pmatrix}=\\begin{pmatrix}t\\\\10t-4t^2\\end{pmatrix}$

\\begin{enumerate}[label=\\alph*)]
  \\item What is the position of both objects at time $t = 0$?
  \\item Will these two objects ever meet after $t = 0$? If yes, when? If not, why not?
\\end{enumerate}


\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer}
}

\\begin{enumerate}[label=\\alph*)]
  \\item $R_a(0)=\\begin{pmatrix}0\\\\0\\end{pmatrix}$, $R_b(0)=\\begin{pmatrix}0\\\\0\\end{pmatrix}$ 
  \\item Let's say they meet at time $t_m$. \\newline Then $R_a(t_m)=R_b(t_m)$ \\newline
  $\\begin{pmatrix}t_m\\\\10t_m-4t^2_m\\end{pmatrix}=\\begin{pmatrix}t_m\\\\2t_m\\end{pmatrix}$ \\newline
  $10t_m-4t^2_m = 2t_m$ \\newline
  $8t_m = 4t_m^2$ \\newline
  Hence, $t_m=4$s.
  
  
\\end{enumerate}

\\newpage
	'''

	return returnTemplate


commonTemplate2 = '''
\\end{document}

'''

Avalues = [1, 2, 3, 4, 5]

def processTemplate(copies):
	global var
	finaltemplate = commonTemplate1
	for copynum in range(copies):
		var['a1'] = random.choice(Avalues)
		var['a2'] = var['a1'] - (3*2) + 4

		var['a1'] = str(var['a1'])
		var['a2'] = str(var['a2'])
		basicTemplate = processBasic()
		printTemplate = basicTemplate
		finaltemplate = finaltemplate + printTemplate
	finaltemplate = finaltemplate + commonTemplate2
	return finaltemplate

result = processTemplate(3)

print(result)