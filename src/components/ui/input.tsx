interface Input {
	name: string;
	label: string;
	value?: string;
	type?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}

export default function Input({ name, label, value, type = 'text', onChange, required }: Input) {
	return (
		<div className="w-full group">
			<label
				htmlFor={name}
				className="block text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors mb-2 ml-1"
			>
				{label}
			</label>
			<div className="relative">
				<input
					id={name}
					name={name}
					type={type}
					placeholder={name}
					value={value}
					onChange={onChange}
					required={required}
					className="block w-full bg-white/[0.03] md:text-lg text-sm border border-border rounded-xl md:rounded-2xl md:py-4 py-2 md:px-6 px-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 transition-all duration-300 glass"
				/>
			</div>
		</div>
	);
}
