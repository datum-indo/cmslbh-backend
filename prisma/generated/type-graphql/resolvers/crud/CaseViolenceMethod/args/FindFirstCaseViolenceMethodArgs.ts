import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseViolenceMethodOrderByInput } from "../../../inputs/CaseViolenceMethodOrderByInput";
import { CaseViolenceMethodWhereInput } from "../../../inputs/CaseViolenceMethodWhereInput";
import { CaseViolenceMethodWhereUniqueInput } from "../../../inputs/CaseViolenceMethodWhereUniqueInput";
import { CaseViolenceMethodScalarFieldEnum } from "../../../../enums/CaseViolenceMethodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCaseViolenceMethodArgs {
  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereInput, {
    nullable: true
  })
  where?: CaseViolenceMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodOrderByInput], {
    nullable: true
  })
  orderBy?: CaseViolenceMethodOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseViolenceMethodWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseViolenceMethodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseViolenceMethodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "kodeMt" | "case_id"> | undefined;
}
