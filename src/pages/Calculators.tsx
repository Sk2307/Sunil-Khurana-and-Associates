import { useState } from 'react';
import { IndianRupee, Percent, Banknote, Wallet, PlusCircle, Info, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import Card from '../components/ui/Card';

import { Page } from '../App';

interface CalculatorsProps {
  onNavigate: (page: Page) => void;
}

export default function Calculators({ onNavigate }: CalculatorsProps) {
  const [activeTab, setActiveTab] = useState<'tax' | 'gst'>('tax');
  const [taxRegime, setTaxRegime] = useState<'old' | 'new'>('new');
  
  // Input States
  const [inputs, setInputs] = useState({
    salary: 1200000,
    otherIncome: 50000,
    interestIncome: 20000,
    rentalIncome: 0,
    deduction80C: 150000,
    deduction80D: 25000,
    hraExemption: 0,
    nps80CCD: 50000,
  });

  const handleInputChange = (name: string, value: string) => {
    const numValue = parseFloat(value.replace(/,/g, '')) || 0;
    setInputs(prev => ({ ...prev, [name]: numValue }));
  };

  // Calculation Logic
  const calculateTax = () => {
    const totalGrossIncome = inputs.salary + inputs.otherIncome + inputs.interestIncome + inputs.rentalIncome;
    let taxableIncome = totalGrossIncome;
    let totalDeductions = 0;

    if (taxRegime === 'new') {
      // New Regime: Standard Deduction 75,000 (Budget 2025)
      totalDeductions = 75000;
      taxableIncome = Math.max(0, totalGrossIncome - totalDeductions);
      
      let tax = 0;
      // Budget 2025: No tax for income up to 12 Lakh (after standard deduction)
      if (taxableIncome > 1200000) {
        // New Slabs (Budget 2025)
        if (taxableIncome > 2400000) tax = (taxableIncome - 2400000) * 0.30 + 300000;
        else if (taxableIncome > 2000000) tax = (taxableIncome - 2000000) * 0.25 + 200000;
        else if (taxableIncome > 1600000) tax = (taxableIncome - 1600000) * 0.20 + 120000;
        else if (taxableIncome > 1200000) tax = (taxableIncome - 1200000) * 0.15 + 60000;
      }
      
      const cess = tax * 0.04;
      return { totalGrossIncome, totalDeductions, taxableIncome, tax: tax + cess };
    } else {
      // Old Regime: Standard Deduction 50,000 + Other Deductions
      const deductions80C = Math.min(150000, inputs.deduction80C);
      const deductions80CCD = Math.min(50000, inputs.nps80CCD);
      totalDeductions = 50000 + deductions80C + deductions80CCD + inputs.deduction80D + inputs.hraExemption;
      taxableIncome = Math.max(0, totalGrossIncome - totalDeductions);

      let tax = 0;
      if (taxableIncome <= 500000) {
        tax = 0; // Rebate 87A
      } else {
        if (taxableIncome > 1000000) tax += (taxableIncome - 1000000) * 0.30 + 112500;
        else if (taxableIncome > 500000) tax += (taxableIncome - 500000) * 0.20 + 12500;
        else if (taxableIncome > 250000) tax += (taxableIncome - 250000) * 0.05;
      }
      const cess = tax * 0.04;
      return { totalGrossIncome, totalDeductions, taxableIncome, tax: tax + cess };
    }
  };

  const results = calculateTax();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val).replace('₹', '₹ ');
  };

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
      {/* Hero Section */}
      <div className="mb-10 flex flex-col gap-4 text-center md:text-left md:flex-row md:items-end md:justify-between">
        <SectionHeader 
          title="Income Tax Calculator"
          description="Estimate your tax liability with our professional, easy-to-use tools. Accurate planning starts here."
        />
        <div className="flex gap-2 justify-center md:justify-end">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">Updated for FY 2025-26</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 border-b border-slate-200">
        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('tax')}
            className={`${
              activeTab === 'tax' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
            } whitespace-nowrap border-b-[3px] py-4 px-1 text-sm font-bold flex items-center gap-2 transition-all`}
          >
            <IndianRupee className="size-5" />
            Income Tax Calculator
          </button>
          {/* GST Calculator hidden for now as per request */}
          {/* 
          <button
            onClick={() => setActiveTab('gst')}
            className={`${
              activeTab === 'gst' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
            } whitespace-nowrap border-b-[3px] py-4 px-1 text-sm font-medium flex items-center gap-2 transition-all`}
          >
            <Percent className="size-5" />
            GST Calculator
          </button>
          */}
        </nav>
      </div>

      {/* Regime Toggle */}
      <div className="mb-8 flex flex-col sm:flex-row items-center gap-4 bg-slate-100 p-2 rounded-2xl w-fit">
        <button
          onClick={() => setTaxRegime('new')}
          className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
            taxRegime === 'new' 
              ? 'bg-white text-primary shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          New Tax Regime
        </button>
        <button
          onClick={() => setTaxRegime('old')}
          className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
            taxRegime === 'old' 
              ? 'bg-white text-primary shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Old Tax Regime
        </button>
      </div>

      {/* Calculator Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Column */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Income Section */}
          <Card className="p-6" hover={false}>
            <div className="flex items-center gap-2 mb-6">
              <Banknote className="text-primary size-6" />
              <h2 className="text-xl font-bold">Income Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Annual Gross Salary (₹)" 
                value={inputs.salary} 
                onChange={(e: any) => handleInputChange('salary', e.target.value)} 
                icon="₹" 
              />
              <Input 
                label="Income from Other Sources (₹)" 
                value={inputs.otherIncome} 
                onChange={(e: any) => handleInputChange('otherIncome', e.target.value)} 
                icon="₹" 
              />
              <Input 
                label="Interest Income (₹)" 
                value={inputs.interestIncome} 
                onChange={(e: any) => handleInputChange('interestIncome', e.target.value)} 
                icon="₹" 
              />
              <Input 
                label="Rental Income (₹)" 
                value={inputs.rentalIncome} 
                onChange={(e: any) => handleInputChange('rentalIncome', e.target.value)} 
                icon="₹" 
              />
            </div>
          </Card>

          {/* Deductions Section - Only shown for Old Regime */}
          {taxRegime === 'old' && (
            <Card className="p-6" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Wallet className="text-primary size-6" />
                  <h2 className="text-xl font-bold">Deductions & Exemptions</h2>
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Old Regime Only</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Basic Deduction (80C)" 
                  value={inputs.deduction80C} 
                  onChange={(e: any) => handleInputChange('deduction80C', e.target.value)} 
                  icon="₹" 
                />
                <Input 
                  label="Medical Insurance (80D)" 
                  value={inputs.deduction80D} 
                  onChange={(e: any) => handleInputChange('deduction80D', e.target.value)} 
                  icon="₹" 
                />
                <Input 
                  label="HRA Exemption" 
                  value={inputs.hraExemption} 
                  onChange={(e: any) => handleInputChange('hraExemption', e.target.value)} 
                  icon="₹" 
                />
                <Input 
                  label="NPS Contribution (80CCD)" 
                  value={inputs.nps80CCD} 
                  onChange={(e: any) => handleInputChange('nps80CCD', e.target.value)} 
                  icon="₹" 
                />
              </div>
              {/* Add More Deductions hidden for now as per request */}
              {/* 
              <div className="mt-6">
                <Button variant="ghost" size="sm" icon={PlusCircle}>
                  Add More Deductions
                </Button>
              </div>
              */}
            </Card>
          )}

          <div className="flex justify-end gap-4">
            <Button variant="ghost" onClick={() => setInputs({
              salary: 0,
              otherIncome: 0,
              interestIncome: 0,
              rentalIncome: 0,
              deduction80C: 0,
              deduction80D: 0,
              hraExemption: 0,
              nps80CCD: 0,
            })}>Reset</Button>
            <Button icon={ArrowRight}>Calculate Tax</Button>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 space-y-6">
            {/* Tax Summary Card */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4 text-slate-900">Tax Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Total Income</span>
                  <span className="font-bold text-slate-900">{formatCurrency(results.totalGrossIncome)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Total Deductions</span>
                  <span className="font-bold text-green-600">- {formatCurrency(results.totalDeductions)}</span>
                </div>
                <div className="h-px bg-slate-200 my-2"></div>
                <div className="flex justify-between text-base">
                  <span className="font-semibold text-slate-700">Taxable Income</span>
                  <span className="font-bold text-slate-900">{formatCurrency(results.taxableIncome)}</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border border-slate-200 text-center mb-6">
                <span className="block text-sm text-slate-500 mb-1">Estimated Tax Payable</span>
                <span className="block text-3xl font-black text-primary">{formatCurrency(results.tax)}</span>
                <span className="block text-xs text-slate-400 mt-1">*Includes 4% Health & Cess</span>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start">
                <Info className="text-primary size-5 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  This calculation is based on the {taxRegime === 'old' ? 'Old' : 'New'} Tax Regime. {taxRegime === 'old' ? (
                    <>You might save <span className="font-bold text-green-600">₹ 12,500</span> by switching to the New Tax Regime.</>
                  ) : (
                    <>The New Tax Regime is now the default and often more beneficial for many taxpayers.</>
                  )}
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-slate-900 text-white p-6 relative overflow-hidden group border-none" hover={false}>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Need Professional Help?</h3>
                <p className="text-slate-300 text-sm mb-4">Tax laws can be complex. Let our experts optimize your tax planning and ensure 100% compliance.</p>
                <Button 
                  className="w-full" 
                  icon={Calendar}
                  onClick={() => window.open('https://wa.me/919215377199?text=Hello%20Sunil%20Khurana%20%26%20Associates%2C%20I%20would%20like%20to%20book%20a%20consultation%20regarding%20my%20tax%20and%20legal%20matters.', '_blank')}
                >
                  Book a Consultation
                </Button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="mt-3 w-full text-center text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  Prefer another way? Contact us
                </button>
              </div>
            </Card>

            {/* Disclaimer */}
            <div className="text-[10px] text-slate-400 text-center px-4">
              Disclaimer: The results provided by this calculator are for estimation purposes only and should not be considered as final tax advice. Please consult with a qualified tax professional before filing.
            </div>
          </div>
        </div>
      </div>

      {/* Tax Slabs Reference */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6 text-slate-900">Current Tax Slabs (FY 2025-26)</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-bold" scope="col">Income Range</th>
                <th className="px-6 py-4 font-bold" scope="col">New Regime Tax Rate</th>
                <th className="px-6 py-4 font-bold" scope="col">Old Regime Tax Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {[
                { range: 'Up to ₹ 4,00,000', new: 'Nil', old: 'Nil (upto ₹2.5L)' },
                { range: '₹ 4,00,001 - ₹ 8,00,000', new: '5%', old: '5% (₹2.5L - ₹5L)' },
                { range: '₹ 8,00,001 - ₹ 12,00,000', new: '10%', old: '20% (₹5L - ₹10L)' },
                { range: '₹ 12,00,001 - ₹ 16,00,000', new: '15%', old: '30% (> ₹10L)' },
                { range: '₹ 16,00,001 - ₹ 20,00,000', new: '20%', old: '30%' },
                { range: '₹ 20,00,001 - ₹ 24,00,000', new: '25%', old: '30%' },
                { range: 'Above ₹ 24,00,000', new: '30%', old: '30%' },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 font-medium">{row.range}</td>
                  <td className="px-6 py-4 text-slate-500">{row.new}</td>
                  <td className="px-6 py-4 text-slate-500">{row.old}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500 italic">* Under New Regime, income up to ₹ 12,00,000 is fully exempt from tax due to rebate (Budget 2025).</p>
      </div>
    </div>
  );
}
