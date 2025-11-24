# Quick Start Guide

## 🚀 Getting the App Running

### Step 1: Start the Server
The development server is already running! Just open your browser.

### Step 2: Open the App
Navigate to: **http://localhost:3000**

---

## 📖 How to Use the App

### A. First Time Setup (30 seconds)

1. **Click "Get Started"** or **"Go to Score Entry"** from the home page

2. **Fill in Class Information**:
   - School Name: `Demo High School`
   - Class Name: `Grade 10A`
   - Term: `First Term`
   - Session: `2024/2025`

### B. Add Students (1 minute)

1. In the **Students** card on the left:
   - Type a student name (e.g., "John Doe")
   - Click **"Add"** or press **Enter**
   
2. Add a few more students:
   - Mary Smith
   - Peter Johnson
   - Sarah Williams

### C. Add Subjects (1 minute)

1. In the **Subjects** card on the right:
   - Type a subject name (e.g., "Mathematics")
   - Click **"Add"** or press **Enter**

2. Add more subjects:
   - English
   - Physics
   - Chemistry
   - Biology

### D. Enter Scores (2 minutes)

A table will appear automatically! For each student-subject combination:

1. **Enter CA score** (0-100) in the CA column
2. **Enter Exam score** (0-100) in the Exam column
3. Watch the **Total** and **Grade** calculate automatically!

**Example scores for John Doe - Mathematics**:
- CA: 25
- Exam: 70
- Total: 95 (auto-calculated)
- Grade: A (auto-calculated, green badge)

### E. Generate PDF Results (30 seconds)

1. Scroll down to **"Generate Result PDFs"**
2. You'll see cards for each student
3. Click **"Download PDF"** on any student card
4. A professional result sheet PDF will download!

---

## 🎨 Understanding the Grading System

The app automatically assigns grades based on total scores:

| Total Score | Grade | Color Badge |
|-------------|-------|-------------|
| 90-100      | A     | 🟢 Green    |
| 80-89       | B     | 🔵 Blue     |
| 70-79       | C     | 🟡 Yellow   |
| 60-69       | D     | 🟠 Orange   |
| 0-59        | F     | 🔴 Red      |

---

## 💡 Pro Tips

### Adding Multiple Entries Quickly
- Use the **Tab** key to move between fields
- Press **Enter** when adding students/subjects to save quickly

### Removing Items
- Click the **"Remove"** button next to any student or subject
- All associated scores will be deleted automatically

### Resetting Everything
- Use the **"Reset All Data"** button at the bottom
- A confirmation dialog will appear before clearing

### Sample Data for Quick Demo

**Students**:
1. John Doe
2. Mary Smith
3. Peter Johnson

**Subjects**:
1. Mathematics
2. English
3. Science

**Sample Scores** (John Doe):
- Mathematics: CA=28, Exam=67 → Total=95 → Grade=A
- English: CA=22, Exam=65 → Total=87 → Grade=B
- Science: CA=20, Exam=55 → Total=75 → Grade=C

---

## 🖨️ PDF Result Sheet Contents

Each generated PDF includes:

1. **School Header** (centered, bold)
2. **"STUDENT RESULT SHEET"** title
3. **Student Information**:
   - Name
   - Class
   - Term & Session
4. **Scores Table**:
   - Subject | CA | Exam | Total | Grade
5. **Grading System Legend**
6. **Signature Sections**:
   - Class Teacher's Signature
   - Principal's Signature
7. **Generation Date** (footer)

---

## 🔄 Data Persistence

**Important Notes**:
- All data is stored in **browser memory**
- Data **persists** during your session
- Data **clears** when you refresh the page
- This is intentional for demo purposes

---

## 📱 Responsive Design

The app works on all screen sizes:
- 💻 **Desktop**: Full table view
- 📱 **Tablet**: Adapted layout
- 📱 **Mobile**: Scrollable tables

---

## 🎯 Common Use Cases

### Demo for School Administration
1. Pre-fill 5-10 students
2. Add 5-8 subjects
3. Enter realistic scores
4. Generate PDFs for 2-3 students to show

### Testing the System
1. Add 1-2 students
2. Add 1-2 subjects
3. Try different score combinations
4. Verify grade calculations
5. Check PDF formatting

### Bulk Result Generation
1. Add all students at once
2. Add all subjects
3. Fill in all scores systematically
4. Generate all PDFs

---

## ⚡ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Add student/subject | Enter (when in input field) |
| Navigate fields | Tab |
| Close dialog | Escape |

---

## 🐛 Troubleshooting

### Issue: Grades not calculating
**Solution**: Make sure both CA and Exam scores are entered (both must be > 0)

### Issue: PDF not downloading
**Solution**: Check browser permissions for downloads. Allow downloads from localhost.

### Issue: Table looks cramped
**Solution**: Scroll horizontally on smaller screens, or zoom out (Ctrl + -)

### Issue: Lost all data
**Solution**: Data resets on page refresh. This is by design for demo purposes.

---

## 🎓 Best Practices

1. **Fill class info first** - Makes PDFs look professional
2. **Add all students before subjects** - Easier workflow
3. **Enter scores systematically** - Go student by student or subject by subject
4. **Save PDFs as you go** - Download individual results for review
5. **Use realistic scores** - Makes the demo more credible

---

## 📞 Next Steps

After trying the app:
1. Explore the **Home page** for feature overview
2. Try the **Reset** function to start fresh
3. Generate multiple PDFs to see consistency
4. Test on different devices for responsiveness

---

## 🌟 Showcase Features

When demonstrating to schools, highlight:

✨ **Ease of Use**: No training needed, intuitive interface  
✨ **Speed**: Real-time calculations, instant PDFs  
✨ **Professional Output**: Clean, printable result sheets  
✨ **No Setup**: Works immediately, no installation  
✨ **Modern Design**: Clean, light theme suitable for schools  
✨ **Flexibility**: Dynamic students/subjects, easy corrections  

---

**Ready to start?** Open http://localhost:3000 and click "Get Started"! 🚀

---

*For detailed documentation, see README.md*
