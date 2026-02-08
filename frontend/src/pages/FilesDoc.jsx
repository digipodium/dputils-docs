import CodeBlock from '../components/CodeBlock';
import ApiDoc from '../components/ApiDoc';

const FilesDoc = () => {
    return (
        <div style={{ padding: 'var(--spacing-2xl) 0' }} className="fade-in">
            <div className="container">
                <h1>
                    <span className="gradient-text">Files Module</span>
                </h1>
                <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-xl)' }}>
                    The files module provides a unified interface for reading and writing files of various formats including PDF, DOCX, TXT, and more.
                </p>

                {/* Supported Formats */}
                <div className="glass-card" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Supported File Formats</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-sm)'
                    }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                            <strong>Documents:</strong> .pdf, .doc, .docx
                        </div>
                        <div style={{ padding: '0.75rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                            <strong>Text:</strong> .txt, .md, .rst
                        </div>
                        <div style={{ padding: '0.75rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                            <strong>Code:</strong> .py, .java, .cpp, .html, .css
                        </div>
                        <div style={{ padding: '0.75rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                            <strong>Config:</strong> .toml, .lock, .ipynb
                        </div>
                    </div>
                </div>

                {/* get_data() */}
                <ApiDoc
                    name="get_data()"
                    signature="get_data(path: str, output='s', encoding='utf-8') -> Union[None, str, object]"
                    description="Obtains data from files of any extension. Automatically detects file type and uses the appropriate parser."
                    parameters={[
                        {
                            name: 'path',
                            type: 'str',
                            description: 'Path of the file to be read (e.g., "sample.txt", "sample.pdf", "sample.docx")'
                        },
                        {
                            name: 'output',
                            type: 'str',
                            description: "'s' for string data, 'b' for binary data (default: 's')"
                        },
                        {
                            name: 'encoding',
                            type: 'str',
                            description: 'Character encoding of the file (default: "utf-8")'
                        }
                    ]}
                    returns="String containing file content, binary data, or None if file couldn't be read"
                    example={
                        <>
                            <CodeBlock
                                language="python"
                                code={`from dputils.files import get_data

# Read a PDF file
pdf_content = get_data("document.pdf")
print(pdf_content)

# Read a Word document
doc_content = get_data("report.docx")
print(doc_content)

# Read a text file with specific encoding
text_content = get_data("data.txt", encoding="utf-8")
print(text_content)

# Read binary data
binary_data = get_data("image.png", output='b')
print(type(binary_data))  # <class 'bytes'>`}
                            />
                        </>
                    }
                />

                {/* save_data() */}
                <ApiDoc
                    name="save_data()"
                    signature="save_data(path: str, data: str) -> bool"
                    description="Writes and saves data into a file of any extension. Automatically detects file type and formats accordingly."
                    parameters={[
                        {
                            name: 'path',
                            type: 'str',
                            description: 'Path of the file to be modified (e.g., "output.txt", "output.pdf", "output.docx")'
                        },
                        {
                            name: 'data',
                            type: 'str',
                            description: 'Data to be stored and saved into the file'
                        }
                    ]}
                    returns="True if file was successfully written, False otherwise"
                    example={
                        <>
                            <CodeBlock
                                language="python"
                                code={`from dputils.files import save_data

# Save to text file
text_data = "Hello, World!\\nThis is a test."
success = save_data("output.txt", text_data)
print(f"Text file saved: {success}")

# Save to PDF
pdf_data = "This will be saved as a PDF document."
success = save_data("output.pdf", pdf_data)
print(f"PDF saved: {success}")

# Save to Word document
doc_data = "Paragraph 1\\nParagraph 2\\nParagraph 3"
success = save_data("output.docx", doc_data)
print(f"Word document saved: {success}")`}
                            />
                        </>
                    }
                />

                {/* Complete Example */}
                <div className="glass-card">
                    <h3 style={{ marginBottom: 'var(--spacing-md)' }}>
                        Complete Example: File Converter
                    </h3>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        Convert a PDF file to a Word document:
                    </p>
                    <CodeBlock
                        language="python"
                        title="file_converter.py"
                        code={`from dputils.files import get_data, save_data

# Read content from PDF
pdf_content = get_data("input.pdf")

if pdf_content:
    # Save the same content to Word document
    success = save_data("output.docx", pdf_content)
    
    if success:
        print("✅ File converted successfully!")
    else:
        print("❌ Failed to save Word document")
else:
    print("❌ Failed to read PDF file")`}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilesDoc;
