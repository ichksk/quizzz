#!/bin/bash

# ブランチタイプのマッピング
declare -A branch_types=(
    [1]="feature"
    [2]="bugfix"
    [3]="hotfix"
    [4]="release"
    [5]="docs"
    [6]="refactor"
    [7]="test"
)

# ブランチタイプの説明を表示する関数
show_branch_types() {
    echo "ブランチの種類を選択してください..."
    echo "--------------------------------------------------"
    echo "1: feature    : 新しい機能の開発・追加"
    echo "2: bugfix     : バグの修正"
    echo "3: hotfix     : 緊急のバグ修正"
    echo "4: release    : リリース準備"
    echo "5: docs       : ドキュメントのみの変更"
    echo "6: refactor   : コードの意味に影響を与えない変更"
    echo "7: test       : テストの追加・修正"
    echo "--------------------------------------------------"
}

# ブランチタイプの説明を表示
show_branch_types

# ユーザーにブランチタイプの数字を入力してもらう
read -p "番号: " branch_type_number

# 入力が有効かチェック
if [[ ! ${branch_types[$branch_type_number]} ]]; then
    echo "エラー: 無効な入力です。1から7の数字を入力してください。"
    read
    exit 1
fi

branch_type=${branch_types[$branch_type_number]}

# ユニークなブランチ一覧を取得する関数
get_unique_branches() {
    # ローカルブランチを取得
    local_branches=$(git branch | sed 's/^[* ] //')

    # リモートブランチを取得し、'remotes/origin/' を削除
    remote_branches=$(git branch -r | sed 's/^[* ] //' | sed 's/^origin\///')

    # ローカルとリモートのブランチを結合し、ソートしてユニークにする
    echo "$local_branches"$'\n'"$remote_branches" | sort -u
}

# ユニークなブランチ一覧を取得
all_branches=$(get_unique_branches)


# 最新のブランチ番号を見つける関数
find_last_index() {
    local last_index=branch_type_number*100-1
    local branch_pattern="^$branch_type/[0-9]{3}-"

    while read -r branch; do
        if [[ $branch =~ $branch_pattern ]]; then
            branch_number=$(echo $branch | cut -d'/' -f2 | cut -d'-' -f1)
            if (( branch_number > last_index )); then
                last_index=$branch_number
            fi
        fi
    done <<< "$all_branches"

    echo $last_index
}

# 最新のブランチ番号を取得
issue_id=$(($(find_last_index) + 1))


# 選択されたタイプのブランチを表示
echo -e "\n${branch_type}ブランチ一覧:"
while read -r branch; do
    if [[ $branch =~ ^$branch_type/[0-9]{3}- ]]; then
        echo "$branch"
    fi
done <<< "$all_branches"

echo -e "\n新しいブランチ番号: $issue_id"
read -p "新しいブランチ名 (ex; create-home-page): " branch_name
read -p "ベースブランチ名 (ex; origin/hogehoge developならそのままEnterして！！！): " base_branch

full_branch_name=${branch_type}/${issue_id}-${branch_name}

echo ""
echo "------------------------------"
echo "ブランチ名: ${full_branch_name}"
echo "------------------------------"
echo ""

git checkout -b ${full_branch_name} ${base_branch:-origin/develop}

if [ $? -eq 0 ]; then
    echo "ブランチを正しく作成しました!!"
else
    echo "ブランチの作成に失敗しました"
fi