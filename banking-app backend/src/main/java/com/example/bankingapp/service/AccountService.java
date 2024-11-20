package com.example.bankingapp.service;

import com.example.bankingapp.entity.Account;
import com.example.bankingapp.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    
    @Autowired
    private AccountRepository accountRepository;

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Optional<Account> getAccountById(Long id) {
        return accountRepository.findById(id);
    }

    public Account updateAccount(Long id, Account accountDetails) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found with id " + id));
        
        account.setEmail(accountDetails.getEmail());
        account.setName(accountDetails.getName());
        // Update other fields as necessary

        return accountRepository.save(account);
    }

    public void deleteAccount(Long id) {
        accountRepository.deleteById(id);
    }
}