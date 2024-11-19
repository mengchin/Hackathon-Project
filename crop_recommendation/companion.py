import pandas as pd

# Load your Excel file
file_path = '../crop_recommendation/CompanionDataset.xlsx'  # Update this to your file path
df = pd.read_excel(file_path)

# Convert DataFrame to HTML
html_table = df.to_html(classes='table table-striped', index=False)

# Print or save the HTML code
print(html_table)

# Optionally save to an HTML file
with open('output_table.html', 'w') as f:
    f.write(html_table)