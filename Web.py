from flask import Flask, render_template
import os

app = Flask(__name__)

# CV Data - Ahmed Akef
cv_data = {
    'name': 'Ahmed Akef',
    'title': 'Communication and Information Engineering Student',
    'tagline': 'Passionate about technology, innovation, and building the future of communication systems',
    'email': 's-ahmed.mhesn@zewailcity.edu.eg',
    'phone': '+201026924092',
    'location': 'Giza, Egypt',
    'linkedin': 'linkedin.com/in/ahmed-akef-782989302',
    'github': 'github.com/Ahmed-Akef',
    'website': 'zewailcity.edu.eg',
    
    'about': '''I am a Communication and Information Engineering student at Zewail City of Science and Technology. 
    I am passionate about building innovative solutions and exploring the cutting edge of engineering and technology. 
    My academic journey revolves around mastering complex communication systems, electronics, and software development. 
    I thrive on solving technical challenges and constantly aim to expand my skills in modern engineering practices.''',
    
    'skills': [
        {'name': 'C++ & Data Structures', 'level': 85},
        {'name': 'Python & Automation', 'level': 80},
        {'name': 'Circuit Design & Analysis', 'level': 75},
        {'name': 'Signal Processing', 'level': 70},
        {'name': 'Embedded Systems', 'level': 75},
        {'name': 'Linux & Web Development', 'level': 70},
    ],
    
    'experience': [
        {
            'title': 'Engineering Student',
            'company': 'Zewail City of Science and Technology',
            'period': '2021 - Present',
            'description': 'Actively participating in academic projects focused on digital communication, electronic circuits, and microcontroller-based systems. Gaining hands-on experience in various engineering labs.'
        },
        {
            'title': 'Independent Developer',
            'company': 'Project-based',
            'period': '2022 - Present',
            'description': 'Developing personal projects in Python and C++, focusing on automation tools and basic data analysis applications.'
        }
    ],
    
    'education': [
        {
            'degree': 'Bachelor of Science in Communication and Information Engineering',
            'institution': 'Zewail City of Science and Technology',
            'period': '2021 - Present',
            'description': 'Currently maintaining a strong academic record with a focus on core engineering principles and advanced communication theories.'
        }
    ],
    
    'projects': [
        {
            'name': 'Communication Systems Simulator',
            'description': 'A tool developed to simulate various modulation techniques and analyze signal performance under different noise conditions.',
            'technologies': ['Python', 'Matplotlib', 'NumPy']
        },
        {
            'name': 'Embedded Control Unit',
            'description': 'Designed and implemented a microcontroller-based system for automated sensor monitoring and control.',
            'technologies': ['C++', 'Arduino', 'Proteus']
        },
        {
            'name': 'Personal Portfolio Website',
            'description': 'A modern, responsive CV website showcasing technical skills and academic achievements.',
            'technologies': ['HTML', 'CSS', 'JavaScript', 'Flask']
        }
    ]
}

@app.route('/')
def index():
    return render_template('index.html', cv=cv_data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
