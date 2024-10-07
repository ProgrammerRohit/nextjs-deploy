const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Quilleditor = () => {

	const defaultContent = `
    <h4><b class="ql-size-large">Quill Snow</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
    <ol>
        <li class="ql-size-normal">Write text, select, and edit with multiple options.</li>
        <li class="">This is quill snow editor.</li>
        <li class="">Easy to customize and flexible.</li>
    </ol>
    <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;

	const defaultContent1 = `
  <h4><b class="ql-size-large">Quill Bubble</b> is a free, open source <a href="https://github.com/quilljs/quill/" target="_blank">Quill Editor</a> built for the modern web. With its <a href="https://quilljs.com/docs/modules/" target="_blank">modular architecture</a> and expressive API, it is completely customizable to fit any need.</h4>
  <ol>
	  <li class="ql-size-normal">Write text, select, and edit with multiple options.</li>
	  <li class="">This is quill snow editor.</li>
	  <li class="">Easy to customize and flexible.</li>
  </ol>
  <h4>Quill officially supports a standard toolbar theme <a href="https://github.com/quilljs/quill/" target="_blank">"Snow"</a> and a floating tooltip theme <a href="https://github.com/quilljs/quill/" target="_blank">"Bubble"</a></h4>
`;

	return (
		<Fragment>
			<Seo title="Form Editor" />
			<Pageheader title="Quill Editor" heading="Form Editor" active="Quill Editor" />
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Quill Snow Editor
							</Card.Title>
						</Card.Header>
						<Card.Body>
						<SunEditor
            setContents={defaultContent}
            setOptions={{
                buttonList: [
                    ['font', 'fontSize', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['align', 'fontColor', 'hiliteColor', 'textStyle'],
                    ['removeFormat'],
                    ['outdent', 'indent'],
                    ['list', 'table'],
                    ['link', 'image', 'video'],
                    ['fullScreen', 'showBlocks', 'codeView'],
                    ['preview', 'print'],
                    ['undo', 'redo']
                ]
            }}
        />
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Quill Bubble Editor
							</Card.Title>
						</Card.Header>
						<Card.Body>

							<SunEditor defaultValue={defaultContent1} />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>

	)
}
Quilleditor.layout = "Contentlayout";

export default Quilleditor;