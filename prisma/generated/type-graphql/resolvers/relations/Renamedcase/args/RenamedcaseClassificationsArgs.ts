import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CaseClassificationOrderByInput } from "../../../inputs/CaseClassificationOrderByInput";
import { CaseClassificationWhereInput } from "../../../inputs/CaseClassificationWhereInput";
import { CaseClassificationWhereUniqueInput } from "../../../inputs/CaseClassificationWhereUniqueInput";
import { CaseClassificationScalarFieldEnum } from "../../../../enums/CaseClassificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RenamedcaseClassificationsArgs {
  @TypeGraphQL.Field(_type => CaseClassificationWhereInput, {
    nullable: true
  })
  where?: CaseClassificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationOrderByInput], {
    nullable: true
  })
  orderBy?: CaseClassificationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => CaseClassificationWhereUniqueInput, {
    nullable: true
  })
  cursor?: CaseClassificationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CaseClassificationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "kodeMt" | "case_id"> | undefined;
}
