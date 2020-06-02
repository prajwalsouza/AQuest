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

\\usepackage{hyperref}
\\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    filecolor=magenta,      
    urlcolor=cyan,
}

\\definecolor{answercolor}{RGB}{123,0,255}
\\definecolor{problemHeadcolor}{RGB}{0,189,255}
\\definecolor{problemLevelColor}{RGB}{255,102,0}
\\definecolor{headingSubTextColor}{RGB}{180,180,180}

\\pagestyle{empty}

\\begin{document}


\\section*{
\\fontfamily{qag}\\selectfont
\\Huge Automatic Questionnaire
\\fontfamily{cmss}\\selectfont
\\newline
\\textcolor{headingSubTextColor}{ \\Large An attempt to generate different valued questions on the same problem set}
\\fontfamily{cmss}\\selectfont
\\begin{flushright}\\large \\url{https://prajwalsouza.github.io}
\\end{flushright}
}

\\newpage


'''

def processBasicQuestion():
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
Solve $5x < ''' + var['p1v1'] + '''$ when $x$ is a natural number.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 2}
}

\\fontfamily{cmss}\\selectfont
Solve $''' + var['p2v1'] + '''x + 5 > ''' + var['p2v2'] + '''$ when $x$ is a real number.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 3}
}

\\fontfamily{cmss}\\selectfont
Solve $\\frac{''' + var['p3v1'] + '''(x-3)}{4} \\geq \\frac{5(3-x)}{7}$.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 4}
}

\\fontfamily{cmss}\\selectfont
Solve $\\frac{''' + var['p4v1'] + '''x-5}{3} - \\frac{7x-3}{5} \\leq \\frac{3x}{4}$.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 5}
}

\\fontfamily{cmss}\\selectfont
Mr. A obtained ''' + var['p5v1'] + ''' and 18 in first two tests. Find the minimum mark he should get in the third test to atleast have an average of ''' + var['p5v2'] + '''.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 6}
}

\\fontfamily{cmss}\\selectfont
The longest side of a triangle is 4 times the shortest side and the third side is ''' + var['p6v1'] + ''' cm shorter than the longest side. If the perimeter of the triangle is atleast ''' + var['p6v2'] + ''' cm, find the minimum length of the shortest side. 

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{problemHeadcolor}{\\normalsize Problem 7}
}

\\fontfamily{cmss}\\selectfont
Solve the inequalities $x - 2y \\leq ''' + var['p7v1'] + '''$, $''' + var['p7v2'] + '''x + 4y \\geq 12$ and $x \\geq 0,  y \\geq 1$  
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



def processBasicAnswer():
	returnTemplate = '''


\\section*{
\\fontfamily{qag}\\selectfont
Linear Inequalities
\\fontfamily{cmss}\\selectfont
\\textcolor{headingSubTextColor}{ \\small You know what I mean, the answers}
}
\\fontfamily{cmss}\\selectfont
\\subsection*{\\fontfamily{cmss}\\selectfont 
\\begin{flushright}\\small For ''' + var['name'] + '''
\\end{flushright}}

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer 1}
}
\\fontfamily{cmss}\\selectfont
$ 5x < ''' + var['a1v1'] + ''' \\implies x < \\frac{''' + var['a1v1'] + '''}{5} \\implies x < ''' + var['a1v2'] + ''' $ \\newline 
Hence, the solution set is $\\{''' + var['a1v3'] + '''\\}$

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer 2}
}
\\fontfamily{cmss}\\selectfont
$ ''' + var['a2v1'] + '''x+5 > ''' + var['a2v2'] + ''' \\implies ''' + var['a2v1'] + '''x > ''' + var['a2v3'] + ''' \\implies x > \\frac{''' + var['a2v3'] + '''}{''' + var['a2v1'] + '''} \\implies x > ''' + var['a2v4'] + ''' $ \\newline 
Hence, the solution set is $(2,\\infty)$

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer 3}
}
\\fontfamily{cmss}\\selectfont
$ \\frac{''' + var['a3v1'] + '''(x-3)}{4} \\geq \\frac{5(3-x)}{7} \\implies ''' + var['a3v2'] + '''(x-3) \\geq 20(3-x) \\implies ''' + var['a3v2'] + '''x-''' + var['a3v3'] + ''' \\geq 60-20x $ \\newline
$\\implies ''' + var['a3v4'] + '''x \\geq ''' + var['a3v5'] + ''' \\implies x \\geq \\frac{''' + var['a3v5'] + '''}{''' + var['a3v4'] + '''} \\implies x \\geq ''' + var['a3v6'] + ''' $.
Hence, the solution set is $[''' + var['a3v6'] + ''', \\infty)$

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer 4}
}
\\fontfamily{cmss}\\selectfont
$ \\frac{''' + var['a4v1'] + '''x-5}{3} - \\frac{7x-3}{5} \\leq \\frac{3x}{4}  \\implies \\frac{5(''' + var['a4v1'] + '''x-5) - 3(7x - 3)}{15} \\leq \\frac{3x}{4} $ 
\\newline $ \\implies 20(''' + var['a4v1'] + '''x - 5) - 12(7x - 3) \\leq 45x \\implies ''' + var['a4v2'] + '''x - 100 - 84x + 36 \\leq 45x $ \\newline 
$\\implies ''' + var['a4v3'] + '''x - 64 \\leq 45x \\implies ''' + var['a4v3'] + '''x - 45x \\leq 64 $ \\newline $\\implies ''' + var['a4v4'] + '''x \\leq 64 \\implies ''' + var['a4v5'] + '''x \\geq -64 \\implies x  \\geq \\frac{-64}{''' + var['a4v5'] + '''} $  \\newline
Hence, the solution set is $[''' + var['a4v6'] + ''',\\infty)$

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer 5}
}
\\fontfamily{cmss}\\selectfont
Let $x$ be the mark he should get in the third test.\\newline 
By the given condition $ \\frac{''' + var['a5v1'] + ''' + 18 + x}{3} \\geq ''' + var['a5v2'] + ''' $ \\newline 
$\\therefore ''' + var['a5v3'] + ''' + x \\geq ''' + var['a5v4'] + ''' $ \\newline
$\\implies x \\geq ''' + var['a5v4'] + ''' - ''' + var['a5v3'] + ''' \\implies x \\geq ''' + var['a5v5'] + ''' $ \\newline 
Thus the minimum mark he must get is $''' + var['a5v5'] + '''$. 

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer 6}
}
\\fontfamily{cmss}\\selectfont
Let $x$ be the length of the shortest side. Then the longest side is $4x$. Also the third side is $4x-''' + var['a6v1'] + '''$. By the given condition, the perimeter \\newline 
$ x + 4x + (4x - ''' + var['a6v1'] + ''') \\geq ''' + var['a6v2'] + ''' $ \\newline
$\\implies 9x - ''' + var['a6v1'] + ''' \\geq ''' + var['a6v2'] + ''' \\implies 9x \\geq ''' + var['a6v3'] + ''' $ \\newline 
$\\implies x \\geq ''' + var['a6v4'] + ''' $
Thus minimum length of the shortest side is $''' + var['a6v4'] + '''$ cm.

\\subsection*{
\\fontfamily{cmss}\\selectfont
\\textcolor{answercolor}{Answer 7}
}

\\begin{tikzpicture}

    \\draw[gray!50, thin, step=0.5] (-1,-4) grid (7,4);
    \\draw[very thick,->] (-1,0) -- (7.2,0) node[right] {$x$};
    \\draw[very thick,->] (0,-4) -- (0,4.2) node[above] {$y$};

    \\foreach \\x in {-1,...,7} \\draw (\\x,0.05) -- (\\x,-0.05) node[below] {\\tiny\\x};
    \\foreach \\y in {-4,...,4} \\draw (-0.05,\\y) -- (0.05,\\y) node[right] {\\tiny\\y};

    \\fill[blue!50!cyan,opacity=0.3] (7,''' + var['a7v1'] + ''') -- (7,4) -- (-1,4) -- (-1, ''' + var['a7v2'] + ''') -- (''' + var['a7v3'] + ''',1) -- (''' + var['a7v4'] + ''', 1) -- cycle;

    \\draw (-1,''' + var['a7v2'] + ''') -- node[below left,sloped] {\\tiny$''' + var['a7v5'] + '''x + 4y = 12$} (7,''' + var['a7v6'] + ''');
    \\draw (-1,''' + var['a7v7'] + ''') -- node[below left ,sloped] {\\tiny$x - 2y = ''' + var['a7v8'] + '''$} (7,''' + var['a7v1'] + ''');
    \\draw (-1,1) -- node[above right,sloped] {\\tiny$y = 1$} (7,1);

\\end{tikzpicture}


\\newpage

	'''

	return returnTemplate


commonTemplate2 = '''
\\end{document}

'''

studentnames = ['Abhinava Krishna','Ajith Narayan K','Aaron Dane Pinto',' Aysha Simran',' Chinmay Annigeri Srinivasaprasanna','Clive Favian Aranha','Devagnik.H.S','Drishya Bhandary',' Eesh N Chouta',' Fahima Mohammed Abdul Majeed Padinhar ','Goutam P Nayak','Gurupreeth P.A','Haleema Nafisa Valavoor','Jehan Deon Dsouza','Joseph Paul Pooppally','Kaneeksha Kiran','Likhith D Kunder',' Lloyd Raju John','Mahzarin Misri','Mesha Shetty B M','N Rohan Bhat','Pratam D','Preethika Viya Dsouza','Samarth  S Patil','Shreesha.K',' Siddharth Kamath K ','Simaz','Subhiksha Rai','Sudhamshu','Suhan S Shetty','T Pranav Pai','Teesha Vijayraj','Varun Tejpal Puthran']
shortstudentnames = ['Abhinava','Ajith ','Aaron',' Aysha',' Chinmay','Clive','Devagnik','Drishya',' Eesh',' Fahima','Goutam','Gurupreeth','Haleema','Jehan','Joseph','Kaneeksha','Likhith',' Lloyd','Mahzarin','Mesha','Rohan','Pratam','Preethika','Samarth','Shreesha',' Siddharth ','Simaz','Subhiksha','Sudhamshu','Suhan','Pranav','Teesha','Varun']

Avalues = [1, 2, 3, 4, 5]

questions = []
answers = []


def processTemplate(copies):
	global var
	finaltemplate = commonTemplate1
	for copynum in range(copies):
		var['name'] = shortstudentnames[copynum]
		var['p1v1'] = random.randint(20, 60)
		var['p2v1'] = random.randint(2, 6)
		var['p2v2'] = random.randint(10, 60)
		var['p3v1'] = random.randint(2, 10)
		var['p4v1'] = random.randint(-2, 6)
		var['p5v1'] = random.randint(10, 30)
		var['p5v2'] = random.randint(17, 30)
		var['p6v1'] = random.randint(3, 20)
		var['p6v2'] = random.randint(var['p6v1']*8, var['p6v1']*8 + 30)
		var['p7v1'] = random.randint(2, 4)
		var['p7v2'] = random.randint(3, 4)

		var['a1v1'] = var['p1v1']
		var['a1v2'] = '%.1f'%(var['p1v1']/float(5))
		setStr = '1'
		for k in range(2, int(var['p1v1']/float(5)) + 1):
			setStr = setStr + ',' + str(k)
		var['a1v3'] = setStr

		var['a2v1'] = var['p2v1']
		var['a2v2'] = var['p2v2']
		var['a2v3'] = var['a2v2'] - 5
		var['a2v4'] = '%.2f'%(var['a2v3']/float(var['a1v1']))

		var['a3v1'] = var['p3v1']
		var['a3v2'] = var['a3v1']*7
		var['a3v3'] = var['a3v2']*3
		var['a3v4'] = var['a3v2'] + 20
		var['a3v5'] = 60 - var['a3v3']
		var['a3v6'] = '%.2f'%(var['a3v5']/float(var['a3v4']))

		var['a4v1'] = var['p4v1']
		var['a4v2'] = var['a4v1']*20
		var['a4v3'] = var['a4v2'] - 84
		var['a4v4'] = var['a4v3'] - 45
		var['a4v5'] = var['a4v4']*(-1)
		var['a4v6'] = '%.2f'%(64/float(var['a4v4']))

		var['a5v1'] = var['p5v1']
		var['a5v2'] = var['p5v2']
		var['a5v3'] = var['a5v1'] + 18
		var['a5v4'] = var['a5v2']*3
		var['a5v5'] = var['a5v4'] - var['a5v3']

		var['a6v1'] = var['p6v1']
		var['a6v2'] = var['p6v2']
		var['a6v3'] = var['a6v2'] + var['a6v1']
		var['a6v4'] = '%.2f'%(var['a6v3']/float(9))

		var['a7v1'] = (7 - var['p7v1'])/float(2)
		var['a7v2'] = (12 + var['p7v2'])/float(4)
		var['a7v3'] = 8/float(var['p7v2'])
		var['a7v4'] = var['p7v1'] + 2
		var['a7v5'] = var['p7v2']
		var['a7v6'] = (12 - 7*var['p7v2'])/float(4)
		var['a7v7'] = (1 + var['p7v1'])/float(-2)
		var['a7v8'] = var['p7v1']

		for m in var:
			var[m] = str(var[m])

		basicTemplate = processBasicQuestion()
		questions.append(basicTemplate)

		basicTemplate = processBasicAnswer()
		answers.append(basicTemplate)

	for qnum in range(len(questions)):
		finaltemplate = finaltemplate + questions[qnum]

	for qnum in range(len(questions)):
		finaltemplate = finaltemplate + answers[qnum]
		

	finaltemplate = finaltemplate + commonTemplate2
	return finaltemplate

result = processTemplate(len(studentnames))

print(result)
