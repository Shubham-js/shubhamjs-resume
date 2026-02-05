# Resume PDF Instructions

## How to Add Your Resume

1. **Prepare your resume PDF**
   - Create or export your resume as a PDF file
   - Name it `resume.pdf` (or any name you prefer)

2. **Add to project**
   - Place your PDF file in the `public` folder
   - Example: `public/resume.pdf`

3. **Update configuration**
   - Open `app/data/portfolio.ts`
   - Update the `resumeUrl` property to match your file name:
     ```typescript
     resumeUrl: "/resume.pdf", // Change this to your file name
     ```

4. **Test**
   - Run `npm run dev`
   - Navigate to the Resume section
   - Verify the PDF displays correctly

## File Size Recommendations

- Keep your resume PDF under 2MB for optimal loading
- Use a PDF optimizer if the file is too large
- Ensure the PDF is not password protected

## Notes

- The resume viewer uses an iframe to display the PDF
- Users can download the PDF directly from the Resume section
- Make sure your PDF is properly formatted and professional
