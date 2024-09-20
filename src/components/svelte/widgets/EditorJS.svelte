<script lang="ts">
	import EditorJs, { type API, type EditorConfig, type OutputData } from '@editorjs/editorjs';
	import Header from '@editorjs/header';
	import NestedList from '@editorjs/nested-list';
	// import Table from '@editorjs/table';
  // @ts-ignore
  import Table from 'editorjs-table'
	// @ts-ignore
	import AttachesTool from '@editorjs/attaches';
	// @ts-ignore
	import Checklist from '@editorjs/checklist';
	// @ts-ignore
	import Embed from '@editorjs/embed';
	import InlineCode from '@editorjs/inline-code';
	// @ts-ignore
	import Link from '@editorjs/link';
	import List from '@editorjs/list';
	// @ts-ignore
	import Paragraph from '@editorjs/paragraph';
	// @ts-ignore
	import Raw from '@editorjs/raw';
	// @ts-ignore
	import SimpleImage from '@editorjs/simple-image';
	// @ts-ignore
	import Underline from '@editorjs/underline';
	import Image from '@editorjs/image';
	// @ts-ignore
	import AnyButton from 'editorjs-button';
	// @ts-ignore
	import Hyperlink from 'editorjs-hyperlink';

	import { onMount } from 'svelte';

	import { createEventDispatcher } from 'svelte';

	export let data: OutputData = {
		blocks: [],
		time: Date.now(),
		version: ''
	};

	const url = new URL(location.href);

	const dispatch = createEventDispatcher();

	let config: EditorConfig = {
		holder: 'editorjs',
		minHeight: 202,
		tools: {
      hyperlink: {
        class: Hyperlink,
        config: {
          shortcut: 'CTRL+M',
          target: '_blank',
          rel: 'nofollow',
          availableTargets: ['_blank', '_self'],
          availableRels: ['author', 'noreferrer'],
          validate: false
        }
      },
			AnyButton: {
				class: AnyButton,
				inlineToolbar: true
			},
			embed: {
				// @ts-ignore
				class: Embed,
				config: {
					services: {
						youtube: true,
						coub: true,
						facebook: true,
						instagram: true,
						twitter: true
					}
				}
			},
			header: {
				// @ts-ignore
				class: Header,
				inlineToolbar: true
			},
			nestedlist: {
				// @ts-ignore
				class: NestedList,
				inlineToolbar: true
			},
			table: {
				// @ts-ignore
				class: Table,
				inlineToolbar: true,
        config: {
          rows: 2,
          cols: 3
        }
			},
			attachestool: {
				class: AttachesTool,
				inlineToolbar: true,
				config: {
					// endpoint: "http://localhost:4321/api/upload"
					uploadByFile: async (file: File) => {
						try {
							const response = await fetch(`${new URL(location.href).origin}/api/upload`, {
								method: 'post',
								headers: {
									'Content-Type': 'multipart/form-data'
								},
								body: JSON.stringify({ file })
							});
							const result = (await response.json());
							const url = result.data;
							return {
								success: 1,
								file: {
									url
								}
							};
						} catch (error: any) {
							return {
								success: 0,
								file: {
									url: null
								}
							};
						}
					}
				}
			},
			checkList: {
				class: Checklist,
				inlineToolbar: true
			},
			inlinecode: {
				class: InlineCode,
				inlineToolbar: true
			},
			link: {
				class: Link,
				inlineToolbar: true
			},
			list: {
				// @ts-ignore
				class: List,
				inlineToolbar: true
			},
			paragraph: {
				// @ts-ignore
				class: Paragraph,
				inlineToolbar: true
			},
			raw: {
				class: Raw,
				inlineToolbar: true
			},
			simpleimage: {
				class: SimpleImage,
				inlineToolbar: true
			},
			underline: {
				class: Underline,
				inlineToolbar: true
			},
			image: {
				// @ts-ignore
				class: Image,
				inlineToolbar: true,
				config: {
					endpoints: {
						byFile: `${url.origin}/api/upload`
					}
				}
			}
		},
		data,
		onChange: async (api: API) => {
			const data = await api.saver.save();
			dispatch('change', data);
		}
	};

	let editor: EditorJs;

	onMount(() => (editor = new EditorJs(config)));
</script>

<div
	class="border-outline flex flex-col gap-4 rounded-lg border border-dashed p-4 dark:border-border"
>
	<div id="editorjs"></div>
</div>
