<?php
class Project
{
    public $id;
    public $title;
    public $portfoliolink;

    public function __construct()
    {
        settype($this->id, 'integer');
        settype($this->title, 'string');
        settype($this->portfoliolink, 'string');
    }
}