import { ChevronDownIcon } from '@heroicons/react/16/solid';

interface Textarea {
	name: string;
	label: string;
}

export default function Textarea({ name, label }: Textarea) {
	return (
		<div className="w-full group">
			<label htmlFor={name} className="block text-sm font-medium text-slate-400 group-focus-within:text-primary transition-colors mb-2 ml-1">
				{label}
			</label>
			<div className="relative">
				<textarea
					id={name}
					name={name}
					rows={4}
					placeholder={name}
					className="block w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 glass resize-none"
				/>
			</div>
		</div>
	);
}
