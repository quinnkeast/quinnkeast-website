import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

export default function ProjectBody({ content }) {
    const Component = useMemo(() => getMDXComponent(content), [content]);

    return (
		<div className={`max-w-3xl mx-auto py-2 md:py-8 project-content`}>
			<Component />
		</div>
	);
}
