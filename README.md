<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>
    <h1>Installation Guide</h1>
    <h2>Metasploit 6</h2>
    <ol>
        <li>Open a terminal.</li>
        <li>Clone the Metasploit repository: <code>git clone https://github.com/rapid7/metasploit-framework.git</code></li>
        <li>Navigate to the Metasploit directory: <code>cd metasploit-framework</code></li>
        <li>Install dependencies: <code>bundle install</code></li>
        <li>Run Metasploit: <code>./msfconsole</code></li>
    </ol>
    <h2>Nmap</h2>
    <ol>
        <li>Open a terminal.</li>
        <li>Install Nmap using your package manager (e.g., for Debian-based systems: <code>sudo apt-get install nmap</code>)</li>
        <li>Verify installation: <code>nmap --version</code></li>
    </ol>

    <h2>John the Ripper</h2>
    <ol>
        <li>Open a terminal.</li>
        <li>Download the John the Ripper source code: <code>wget https://www.openwall.com/john/j/john-1.9.0-jumbo-1.tar.gz</code></li>
        <li>Extract the tarball: <code>tar -xvzf john-1.9.0-jumbo-1.tar.gz</code></li>
        <li>Navigate to the John the Ripper directory: <code>cd john-1.9.0-jumbo-1</code></li>
        <li>Compile John the Ripper: <code>./configure && make -s clean && make -sj4</code></li>
        <li>Verify installation: <code>./run/john --version</code></li>
    </ol>

    <h2>Aircrack-ng</h2>
    <ol>
        <li>Open a terminal.</li>
        <li>Install Aircrack-ng using your package manager (e.g., for Debian-based systems: <code>sudo apt-get install aircrack-ng</code>)</li>
        <li>Verify installation: <code>aircrack-ng --version</code></li>
    </ol>
</body>
</html>
