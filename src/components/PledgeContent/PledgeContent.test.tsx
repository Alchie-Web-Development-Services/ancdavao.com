import React from 'react';
import { render, screen } from '@testing-library/react';
import PledgeContent from './index';

describe('PledgeContent', () => {
  it('renders the My Pledge heading', () => {
    render(<PledgeContent />);
    expect(screen.getByRole('heading', { name: /my pledge/i })).toBeInTheDocument();
  });

  it('renders the pledge amount and timeframe', () => {
    render(<PledgeContent />);
    expect(screen.getByText(/₱1000 pledged in 30 days/i)).toBeInTheDocument();
  });

  it('renders the fulfilled amount', () => {
    render(<PledgeContent />);
    expect(screen.getByText(/you have fulfilled ₱200 so far./i)).toBeInTheDocument();
  });

  it('renders the Donate Now button', () => {
    render(<PledgeContent />);
    expect(screen.getByRole('button', { name: /donate now/i })).toBeInTheDocument();
  });

  it('renders the pledge level', () => {
    render(<PledgeContent />);
    expect(screen.getByText(/bronze/i)).toBeInTheDocument();
  });

  it('renders the badges', () => {
    render(<PledgeContent />);
    expect(screen.getByText(/first donation made/i)).toBeInTheDocument();
  });

  it('renders the urgency section with funded percentage', () => {
    render(<PledgeContent />);
    expect(screen.getByText(/85% funded/i)).toBeInTheDocument();
  });

  it('renders the impact section with kids fed and weeks', () => {
    render(<PledgeContent />);
    expect(screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === 'You have helped feed 1 kid(s) for 1 week(s) so far!';
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(
        (child) => !hasText(child)
      );
      return elementHasText && childrenDontHaveText;
    })).toBeInTheDocument();
  });

  it('renders the auto-pay checkbox', () => {
    render(<PledgeContent />);
    expect(screen.getByText(/enable auto-pay for monthly giving/i)).toBeInTheDocument();
  });

  it('renders the Trust & Transparency links', () => {
    render(<PledgeContent />);
    expect(screen.getByRole('link', { name: /financial transparency/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /previous successful projects/i })).toBeInTheDocument();
  });
});