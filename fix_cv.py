
import os

file_path = r'd:\CV\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The incorrect block (simulated success)
old_block_start = "const contactForm = document.getElementById('contactForm');"
old_block_end = "                        });\n                }"

# I'll look for a unique substring to identify the block to replace
target_str = "// --- SUCCESS SIMULATION ---"

if target_str in content:
    # Find start of the block (const contactForm...)
    start_index = content.rfind("const contactForm = document.getElementById('contactForm');", 0, content.find(target_str))
    
    # Find end of the block
    end_marker = "                        });\n                }"
    end_index = content.find(end_marker, start_index) + len(end_marker)
    
    if start_index != -1 and end_index != -1:
        new_block = """                const contactForm = document.getElementById('contactForm');

                if (contactForm) {
                        contactForm.addEventListener('submit', function (e) {
                                e.preventDefault();
                                
                                const name = document.getElementById('name').value;
                                const subject = document.getElementById('subject').value;
                                const message = document.getElementById('message').value;
                                const emailTo = 's-ahmed.mhesn@zewailcity.edu.eg';
                                
                                // Construct mailto link
                                const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\\n\\nMessage:\\n' + message)}`;
                                
                                // Open email client
                                window.location.href = mailtoLink;
                                
                                // Reset form
                                contactForm.reset();
                        });
                }"""
        
        new_content = content[:start_index] + new_block + content[end_index:]
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully replaced content.")
    else:
        print("Could not find start or end of block.")
else:
    print("Target string not found.")
