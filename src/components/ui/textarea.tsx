interface Textarea {
	name: string;
	label: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	required?: boolean;
}

export default function Textarea({ name, label, value, onChange, required }: Textarea) {
	return (
		<div className="w-full group">
			<label
				htmlFor={name}
				className="block text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors mb-2 ml-1"
			>
				{label}
			</label>
			<div className="relative">
				<textarea
					id={name}
					name={name}
					rows={4}
					placeholder={name}
					value={value}
					onChange={onChange}
					required={required}
					className="block w-full bg-white/[0.03] md:text-lg text-sm border border-border md:rounded-2xl rounded-xl py-2 px-4 md:py-4 md:px-6 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300 glass resize-none"
				/>
			</div>
		</div>
	);
}
